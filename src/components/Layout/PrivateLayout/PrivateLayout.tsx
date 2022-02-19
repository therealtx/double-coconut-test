import { ReactNode } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import { HeaderLogo } from "@/assets/svg/header-logo";
import useLogin from "@/hooks/useLogin";
import { resetUser } from "@/store/user/userSlice";
import { useAppDispatch } from "@/hooks/useReduxTypedHooks";
import PrivateLayoutStyled from "./PrivateLayout.styles";

const PublicLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const fullName = useLogin();

  const handleSignOut = () => {
    userbase.signOut().catch((e) => {
      toast(e.message, { type: "error" });
    });
    dispatch(resetUser());
    router.push("/signin");
  };

  return (
    <PrivateLayoutStyled>
      <header className="flex justify-between">
        <HeaderLogo />

        <div className="buttons">
          <Link href="/profile">
            <span className="cursor-pointer">{fullName}</span>
          </Link>
          <a href="#" onClick={handleSignOut}>
            Sign out
          </a>
        </div>
      </header>
      <main>{children}</main>
    </PrivateLayoutStyled>
  );
};

export default PublicLayout;
