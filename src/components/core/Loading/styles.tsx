import styled from "@emotion/styled";

export default styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(4, 4, 4, 0.2);
    border-right: 1.1em solid rgba(4, 4, 4, 0.2);
    border-bottom: 1.1em solid rgba(4, 4, 4, 0.2);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }

  @-webkit-keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
