import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg col-8 shadow-sm border">
      <div className="container-fluid">
        <a className="navbar-brand" to="#">
          <img src="images/kiteLogo.png" alt="" style={{ height: "2rem" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-3">
            <NavLink
              style={{ fontSize: "0.8rem" }}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              style={{ fontSize: "0.8rem" }}
              to="/orders"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Orders
            </NavLink>
            <NavLink
              to="/holdings"
              style={{ fontSize: "0.8rem" }}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Holdings
            </NavLink>

            <NavLink
              to="/positions"
              style={{ fontSize: "0.8rem" }}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Positions
            </NavLink>

            <NavLink
              to="/funds"
              style={{ fontSize: "0.8rem" }}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Funds
            </NavLink>

            <NavLink
              to="/apps"
              style={{ fontSize: "0.8rem" }}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Apps
            </NavLink>

            <span
              className="d-flex justify-content-center align-items-center"
              style={{ fontSize: "0.8rem" }}
            >
              <span
                className="text-light rounded-circle d-inline-flex justify-content-center align-items-center"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "0.8rem",
                  backgroundColor: "rgb(224, 170, 230)",
                }}
              >
                A
              </span>
              &nbsp;<span>Aryan</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
