import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import CloseButton from "../components/CloseButton";

export default function RegistrationPage() {
  return (
    <>
      <Header>
        <NavLink to={"/HomePage"}>
          <CloseButton/>
        </NavLink>
      </Header>
    </>
  )
}
