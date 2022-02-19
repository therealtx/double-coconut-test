import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { PublicLayout } from "@/components/Layout";
import SignUpForm from "@/modules/SignUpForm";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";

const Signup = () => {
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (token) router.push("/");
  }, [token]);

  return (
    <PublicLayout>
      <Head>
        <title>Signup</title>
      </Head>

      <SignUpForm />
    </PublicLayout>
  );
};

export default Signup;
