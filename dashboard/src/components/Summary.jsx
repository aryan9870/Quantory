import React from "react";

const Summary = () => {
  return (
    <div className="container-fluid text-muted">
      <div className="row border-bottom">
        <div className="col mt-5">
          <h1 className="fs-5">Hi, Aryan!</h1>
        </div>
      </div>
      <div className="row my-5 border-bottom">
        <div className="col-6">
          <h4 style={{fontSize: "0.8rem"}} className="mb-5 mute">Equity</h4>
          <div className="row">
            <div className="col-6">
              <h1 className="fs-5">3.74K</h1>
              <p style={{fontSize: "0.8rem"}} className="mute">Margin Avilable</p>
            </div>
            <div className="col-6">
              <p className="mute">Margin Used:  25500</p>
              <p className="mute">Opening Balance: 0</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="row my-5">
        <div style={{fontSize: "0.8rem"}}>
          <h4 style={{fontSize: "0.8rem"}} className="mb-5 mute">Holdings(11)</h4>
          <div className="row">
            <div className="col-6">
              <h1 className="fs-5 text-success">1.15K</h1>
              <p style={{fontSize: "0.8rem"}} className="mute">P&L</p>
            </div>
            <div className="col-6">
              <p className="mute">Currant Value:  26150</p>
              <p className="mute">Opening Balance: 25000</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Summary;
