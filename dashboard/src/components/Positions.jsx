import React from 'react'
import { positions } from '../data/data';

const Positions = () => {
  const rowClass = "border-top d-grid align-items-center px-2";

  const format = (n) =>
  n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
  return (
    <div className="container-fluid text-muted">
          <div className="row mt-5">
            <div className="col">
              <h1 className="fs-5">Positions ({positions.length})</h1>
            </div>
          </div>
          <div
            className={rowClass}
            style={{
              gridTemplateColumns: "1fr 2fr 1fr 1.5fr 1.5fr 1fr 1fr",
              height: "32px",
            }}
          >
            <span className="mute">Product</span>
            <span className="mute">Instruments</span>
            <span className="mute">Qty</span>
            <span className="mute">Avg. cost</span>
            <span className="mute">LTP</span>
            <span className="mute">Net chg</span>
            <span className="mute">Day chg</span>
          </div>
    
          {positions.map((p, idx) => (
            <div
              key={idx}
              className={rowClass}
              style={{
                gridTemplateColumns: "1fr 2fr 1fr 1.5fr 1.5fr 1fr 1fr",
                height: "32px",
              }}
            >
              <span>CNC</span>
              <span>{p.name}</span>
              <span>{p.qty}</span>
              <span>{p.avg}</span>
              <span>{p.price}</span>
              <span className={parseFloat(p.net) > 0 ? "profit" : "loss"}>{p.net}</span>
              <span className={parseFloat(p.day) > 0 ? "profit" : "loss"}>{p.day}</span>
              
            </div>
          ))}
        </div>
  )
}

export default Positions