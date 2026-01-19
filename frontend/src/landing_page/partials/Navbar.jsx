import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light p-3 fixed-top shadow-sm">
      <div class="container-fluid px-5">
        <Link class="navbar-brand text-primary fw-semibold"  to="/">
         <i class="fa-brands fa-quinscape"></i> QUANTORY
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-4">
            <Link className="nav-link" aria-current="page"  to="/signup">Signup</Link>
            <Link className="nav-link"  to="/about">About</Link>
            <Link className="nav-link"  to="/product">Products</Link>
            <Link className="nav-link"  to="/pricing">Pricing</Link>
            <Link className="nav-link"  to="/support">Support</Link>
            <Link className="nav-link"  to="#"><i class="fa-solid fa-bars"></i></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
