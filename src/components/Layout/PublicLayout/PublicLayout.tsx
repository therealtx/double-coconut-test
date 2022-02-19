import { ReactNode } from "react";
import Link from "next/link";
import { HeaderLogo } from "@/assets/svg/header-logo";
import PublicLayoutStyled from "./PublicLayout.styles";

const PublicLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <PublicLayoutStyled>
      <header className="flex justify-between">
        <HeaderLogo />
        <div className="buttons">
          <Link href="/signin">
            <a className="text-blue cursor-pointer">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-blue cursor-pointer">Register</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </PublicLayoutStyled>
  );
};

export default PublicLayout;
