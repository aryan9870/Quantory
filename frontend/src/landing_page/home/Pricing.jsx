import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5 my-5 text-muted">
      <div className="row">
        <div className="col-5">
          <h1 style={{fontSize: "1.5rem"}}>Unbeatable pricing</h1>
          <p style={{fontSize: "1.1rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a className="text-decoration-none" href="">See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 border-secondary-subtle border text-center px-3 py-4">
              <h1 className="mb-2">&#8377; 0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 border-secondary-subtle border text-center px-3 py-4">
              <h1 className="mb-2">&#8377; 20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
