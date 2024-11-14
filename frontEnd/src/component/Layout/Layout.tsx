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
        <h1>War Simulator</h1>
        <h3>welcome {user?.userName}</h3>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <button onClick={() => logOut()}>logOut</button>
        </div>
      </nav>

      {children}

      <footer className="layout-footer">
        <h2>About app</h2>
        <p>
        War Simulator is a web application that allows users to simulate a war between two countries,
        and track the progress of the war,
        and view the results of the war.
        </p>
      </footer>
    </div>
  );
};

export default Layout;