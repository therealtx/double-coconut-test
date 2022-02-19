import { useEffect, useState } from "react";
import { useAppSelector } from "./useReduxTypedHooks";

const useLogin = () => {
  const [userFullName, setUserFullName] = useState("");
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    setUserFullName(user?.profile?.firstName ? `${user?.profile?.firstName} ${user?.profile?.lastName}` : "");
  }, [user]);

  return userFullName;
};

export default useLogin;
