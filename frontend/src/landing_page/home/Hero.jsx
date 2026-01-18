import React from "react";

const Hero = () => {
  return (
    <div className="container my-5 p-5 text-muted">
      <div className="row text-center">
        <img src="/media/images/homeHero.png" alt="Hero Image" className="mb-5 mt-3 col-8 offset-2"/>
        <h1 style={{fontSize: "1.5rem"}} className="">Invest in everything</h1>
        <p style={{fontSize: "1.2rem"}} className="">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="btn btn-primary f-5 mt-3 p-2 fw-semibold" style={{width: "20%", margin: "auto", fontSize: "1.2rem"}}>Sign up for free</button>
      </div>
    </div>
  );
};

export default Hero;
