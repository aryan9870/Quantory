import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid text-white my-5 p-5"
      style={{ backgroundColor: "rgb(56, 126, 209)" }}
    >
      <div className="container px-5">
        {/* Top bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Support Portal</h4>
          <a href="#" className="text-white">
            Track Tickets
          </a>
        </div>

        {/* Main content */}
        <div className="row">
          {/* Left */}
          <div className="col-6">
            <h5 className="mb-3">
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h5>

            <input
              className="form-control mb-3 p-3"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            />

            <div className="d-flex gap-4 flex-wrap">
              <a className="text-white" href="#">
                Track account opening
              </a>
              <a className="text-white" href="#">
                Track segment activation
              </a>
              <a className="text-white" href="#">
                Intraday margins
              </a>
              <a className="text-white" href="#">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-1"></div>
          {/* Right */}
          <div className="col-5 mt-4 mt-md-0">
            <h5>Featured</h5>
            <ol className="ps-3">
              <li>
                <a className="text-white" href="#">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
