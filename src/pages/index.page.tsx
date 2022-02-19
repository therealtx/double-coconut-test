import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";
import Feed from "@/modules/Feed";

/**
 *
 * @returns Landing page
 */
export default function LandingPage() {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.user);

  useEffect(() => {
    router.push(token ? "/" : "/signup");
  }, []);

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>

      {token && <Feed />}
    </>
  );
}
