import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import "./Layout.css";
import { RootState } from "../../store/store";


const Layout: React.FC<{children:ReactNode}> = ({children}) => {
  const Navigate = useNavigate()
  const {user} = useSelector((state: RootState) => state.user)

  const logOut = () => {
    Navigate("/logIn")
  }


  return (
    <div className="layout-page">
      <nav className="navbar">
        <h1>vote app</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            {user && user.IsAdmin && <Link to="/Statistics">Statistics</Link>}
            <button onClick={() => logOut()}>logOut</button>
        </div>
      </nav>

      {children}

      <footer className="layout-footer">
        <h2>About app</h2>
        <p>
          vote in 2023 is a web application that allows users to vote on a
          specific issue or topic and receive real-time results.


        </p>
      </footer>
    </div>
  );
};

export default Layout;