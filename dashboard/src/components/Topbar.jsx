import React from "react";
import Menu from "./Menu";

const Topbar = () => {
  return (
    <>
      <div className="container-fluid border bg-light">
        <div className="row">
          <nav className="navbar navbar-expand-lg col-4">
            <div className="container-fluid">
              <div style={{fontSize: "0.9rem"}} className="collapse navbar-collapse px-5" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">
                    NIFTY 50 &nbsp;&nbsp; <span className="text-danger">100.2</span>
                  </a>
                </div>
                <div className="navbar-nav ms-auto">
                  <a className="nav-link active" aria-current="page" href="#">
                    SENSEX &nbsp;&nbsp; <span className="text-danger">100.2</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Topbar;
