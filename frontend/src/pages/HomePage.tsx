import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import "../styles/pages/HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Header>
        <HamburgerMenu />
      </Header>
      <section className="homePageSection">
        <h1 className="title">Track your Money here, there and everywhere</h1>
        <p className="caption">
          One place to manage and invest your money. Send, receive and spend
          worldwide.{" "}
        </p>
        <div className="buttonContainer">
          <NavLink to={"/RegistrationPage"}>
            <Button type="button" text="Open an account" />
          </NavLink>
          <NavLink to={"/LoginPage"}>
            <Button type="button" text="Log In" />
          </NavLink>
        </div>
      </section>
    </>
  );
}
