import { useLocation, useNavigate, useParams } from "react-router-dom";
import Comments from "../../../components/Board/Comments";
import * as S from "./PostDetailPage.style";
import { useMutation, useQuery } from "@tanstack/react-query";
import { delectPost, getDetailPost } from "../../../api/posts";
import queryClient from "../../../api/queryClient";
import LoadingComponent from "../../../components/Loading/index";
import ErrorComponent from "../../../components/Error/index";

const PostDetailPage = () => {
  const params = useParams();
  const nav = useNavigate();

  const location = useLocation();

  const body = { postId: params.id, password: location.state.password };

  const { data, isPending, isError } = useQuery({
    queryKey: ["posts", { id: params.id }],
    queryFn: () => getDetailPost(params.id, body),
    staleTime: 10 * 60 * 1000,
  });

  let content;
  const userId = localStorage.getItem("userId");

  const { mutate } = useMutation({
    mutationFn: delectPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "none",
      });
      nav("/board");
    },
  });

  const handleDelete = () => {
    mutate(params.id);
  };

  if (isPending) {
    content = <LoadingComponent />;
  }

  if (isError) {
    nav("/board");
    content = <ErrorComponent />;
  }

  if (data) {
    content = (
      <>
        <S.Title>
          <h1>{data.title}</h1>
          <div>
            <p>작성자 : {data.author.name}</p>
            <p>작성 날짜 : {data.createdAt.split("T")[0]}</p>
            <p>조회수: {data.views}</p>
          </div>
        </S.Title>
        <S.ContentWrapper>
          <S.Content>{data.content}</S.Content>
          {data.author.userId == userId ? (
            <>
              <S.BtnBox>
                <button onClick={() => nav(`/board/edit/${params.id}`)}>수정</button>
                <button onClick={handleDelete}>삭제</button>
              </S.BtnBox>
              <S.BtnBox2>
                <button>신고</button>
                <button>목록</button>
              </S.BtnBox2>
            </>
          ) : null}
        </S.ContentWrapper>
        <S.CommentWrapper>
          <Comments />
        </S.CommentWrapper>
      </>
    );
  }

  return <S.Container>{content}</S.Container>;
};

export default PostDetailPage;
