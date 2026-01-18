import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light p-3 fixed-top shadow-sm">
      <div class="container-fluid px-5">
        <a class="navbar-brand text-primary fw-semibold" href="#">
         <i class="fa-brands fa-quinscape"></i> QUANTORY
        </a>
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
            <a className="nav-link" aria-current="page" href="#">Signup</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Products</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link" href="#">Support</a>
            <a className="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
