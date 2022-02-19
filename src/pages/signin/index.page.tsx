import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { PublicLayout } from "@/components/Layout";
import SignInForm from "@/modules/SignInForm";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";

const SignIn = () => {
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (token) router.push("/");
  }, [token]);

  return (
    <PublicLayout>
      <Head>
        <title>SignIn</title>
      </Head>

      <SignInForm />
    </PublicLayout>
  );
};

export default SignIn;
