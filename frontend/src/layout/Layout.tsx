import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useLoginContext } from "../context/Login";
import { useEffect } from "react";
import { userType } from "../types";

export default function Layout() {
  const { user, login } = useLoginContext();
  console.log(user);

  const userStorage: userType = JSON.parse(
    localStorage.getItem("user") || "{}"
  );
  console.log(userStorage);

  const isUserStorageEmpty = (obj: userType) => {
    if (Object.keys(obj).length === 0) {
      return false;
    }
    return true;
  };

  if (!isUserStorageEmpty(userStorage)) {
    login(userStorage.userEmail, userStorage.userPassword);
  }

  useEffect(() => {
    if (user.userName === "") {
      // Redirect only if the current URL is not already "/HomePage"
      if (window.location.pathname !== "/HomePage") {
        window.location.replace("/HomePage");
      }
    } else {
      // Redirect only if the current URL is not already "/"
      if (window.location.pathname !== "/DashBoard") {
        window.location.replace("/DashBoard");
      }
    }
  }, [user]);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
