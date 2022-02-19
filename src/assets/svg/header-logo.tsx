import Link from "next/link";
import styled from "@emotion/styled";

const LogoWrapper = styled.a`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  img {
    max-height: 50px;
  }
`;

export const HeaderLogo = () => (
  <Link href="/">
    <LogoWrapper>
      <img src={"../logo.png"} alt="Logo" />
    </LogoWrapper>
  </Link>
);
