import React from "react";

const Hero = () => {
  return (
    <>
    <div className="container text-muted my-5 p-5 text-center">
      <div className="row">
        <h1 className="mt-5" style={{ fontSize: "1.8rem" }}>
          Pricing
        </h1>
        <p className="fs-5">
          Free equity investments and flat &#8377;20 traday and F&O trades
        </p>
      </div>
    </div>
    <div className="container text-muted my-5 p-5">
      <div className="row pt-5">
        <div className="col text-center">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h1 style={{ fontSize: "1.8rem" }}>Free equity delivery</h1>
          <p>
            All equity delivery investments NSE, BSE, are absolutely free — ₹ 0
            brokerage.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/pricing20.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h1 style={{ fontSize: "1.8rem" }}>Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h1 style={{ fontSize: "1.8rem" }}>Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
