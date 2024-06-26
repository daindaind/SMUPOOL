import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  height: 100%;
  width: 950px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 680px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom: 2px solid ${theme.COLOR.DARK_BLUE};
  width: 100%;

  font-size: 30px;
  padding: 10px;
  outline: none;
  margin-bottom: 30px;

  h1 {
    color: ${theme.COLOR.DARK_BLUE};
    font-weight: 700;
    font-size: 30px;
    width: 55%;
    overflow-wrap: break-word;

    @media ${theme.SCREEN_SIZE.TABLET} {
      font-size: 20px;
      width: 50%;
    }
  }

  div {
    display: flex;
    align-items: end;
    p {
      font-size: 12px;
      color: #a7a7a7;
      padding-left: 10px;

      @media ${theme.SCREEN_SIZE.TABLET} {
        font-size: 10px;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  color: #a7a7a7;
  width: 100%;
  height: 100%;
  font-size: 17px;
  min-height: 230px;
  border: 1px solid #999;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-size: 17px;
  padding: 20px 25px;
`;

const Content = styled.div`
  width: 89%;
  height: 100%;

  @media ${theme.SCREEN_SIZE.TABLET} {
    font-size: 13px;
  }
`;

const BtnBox = styled.div`
  width: 11%;
  display: flex;
  justify-content: end;
  align-items: baseline;

  button {
    padding: 0;
    font-size: 15px;
    cursor: pointer;
    border: none;
    background-color: inherit;
    color: #a7a7a7;
    text-decoration-line: underline;
    margin: 0 7px;

    &:hover {
      color: #919191;
    }

    @media ${theme.SCREEN_SIZE.TABLET} {
      font-size: 11px;
    }
  }
`;

const BtnBox2 = styled(BtnBox)`
  position: absolute;
  bottom: -40px;
  right: 20px;
`;

const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export { Container, Title, ContentWrapper, Content, BtnBox, BtnBox2, CommentWrapper };
