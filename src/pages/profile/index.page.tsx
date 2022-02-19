import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { PrivateLayout } from "@/components/Layout";
import ProfileForm from "@/modules/ProfileForm";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";

/**
 *
 * @returns signup page
 */
const Profile = () => {
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!token) router.push("/");
  }, [token]);

  return (
    <PrivateLayout>
      <Head>
        <title>Profile</title>
      </Head>

      <ProfileForm />
    </PrivateLayout>
  );
};

export default Profile;
