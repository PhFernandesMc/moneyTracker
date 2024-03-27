import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useLoginContext } from "../context/Login";
// import { useEffect } from "react";
import { userType } from "../types";
import { useEffect } from "react";

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
    if (user.userName !== "") {
      if (window.location.pathname !== "/DashBoard") {
        window.location.replace("/DashBoard");
      }
    } else {
      if (window.location.pathname === "/DashBoard") {
        window.location.replace("/HomePage");
      }
    }
  }, [user])

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
