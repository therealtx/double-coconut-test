import styled from "@emotion/styled";

const PublicLayoutStyled = styled.div`
  header {
    height: 70px;
    background-color: #c6c6c6;
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;

    p,
    svg {
      margin: 0 20px;

      .text-blue {
        color: blue;
      }
    }
  }

  main {
    top: 70px;
    height: calc(100% - 70px);
    position: absolute;
    width: 100%;
  }

  .buttons {
    a {
      color: #fff;
      margin: 0 10px;
    }
  }
`;

export default PublicLayoutStyled;
