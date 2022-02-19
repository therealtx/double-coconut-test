import styled from "@emotion/styled";

const PrivateLayoutStyled = styled.div`
  header {
    height: 70px;
    background-color: #4b0082;
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;

    p,
    svg {
      margin: 0 20px;
    }
  }

  main {
    top: 70px;
    height: calc(100% - 70px);
    position: absolute;
    width: 100%;
  }

  .buttons {
    color: #fff;
    padding: 10px;

    a {
      margin: 10px;
      color: inherit;
    }
  }
`;

export default PrivateLayoutStyled;
