import { ReactNode } from "react";
import "../styles/components/Header.scss"

export default function Header({children}: {children: ReactNode}) {
  return (
    <header className="header">
      <div className="leftContainer">
        <h1 className="logo">Money <span>Tracker</span></h1>
      </div>
      <div className="RightContainer">
        {children}
      </div>
    </header>
  )
}
