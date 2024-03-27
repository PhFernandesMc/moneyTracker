import { useState } from "react";
import "../styles/components/BurgerMenu.scss";

export default function HamburgerMenu() {
  const [menu, setMenu] = useState<string>("");

  const clickHandler = () => {
    setMenu((prevState) => (prevState === "" ? "open" : ""));
  };

  return (
    <>
      <div onClick={clickHandler} className="menu">
        <div className={`${menu === "open" ? "closeBar1" : ""} menuBars`}></div>
        <div className={`${menu === "open" ? "closeBar2" : ""} menuBars`}></div>
      </div>
      <div
        className={`${menu} menuList`}
      >
        <ul>
          <li className="menuItems">Login</li>
          <li className="menuItems">Register</li>
          <li className="menuItems">Home Page</li>
        </ul>
      </div>
    </>
  );
}
