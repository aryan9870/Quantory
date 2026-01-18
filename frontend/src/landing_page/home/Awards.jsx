import React from "react";

const Awards = () => {
  return (
    <div className="container p-5 mb-5 text-muted">
      <div className="row">
        <div className="col-5">
          <img src="media/images/largestBroker.svg" style={{width: "100%"}} alt=""/>
        </div>
        <div className="col-1"></div>
        <div className="col-6 mb-5 mt-5">
          <h1 className="mb-3" style={{fontSize: "1.5rem"}}>Lorem ipsum dolor sit.</h1>
          <p style={{fontSize: "1.1rem"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            consequatur.
          </p>
          <div className="row mt-3" style={{fontSize: "1.1rem"}}>
            <div className="col-6">
              <ul className="">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <img src="media\images\pressLogos.png" alt="" style={{width: "90%"}} className="mt-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
