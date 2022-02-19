import styled from "@emotion/styled";

export const StylesFormStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  .form-wrapper,
  form {
    width: 100%;
    max-width: 360px;
  }

  .form-item {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 16px;

    .text-red-500 {
      position: absolute;
      bottom: 0;
    }
  }

  label,
  input {
    display: block;
    width: 100%;
  }

  input {
    height: 30px;
    padding: 5px;
  }

  .mb-3 {
    margin-bottom: 16px;
  }

  .text-red-500 {
    color: red;
  }

  .btn {
    width: 120px;
    text-align: center;
  }

  .position-relative {
    position: relative;

    &.loading {
      filter: blur(5px);
      pointer-events: none;
    }
  }
`;
