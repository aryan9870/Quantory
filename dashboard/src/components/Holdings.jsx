import React from "react";
import { holdings } from "../data/data";

const Holdings = () => {
  const rowClass = "border-top d-grid align-items-center px-2";

  const format = (n) =>
  n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });


  const totalPnL = holdings.reduce((acc, h) => {
    return acc + h.pnl;
  }, 0);

  const curValue = holdings.reduce((acc, h) => {
    return acc + h.price * h.qty;
  }, 0);

  const totalInvestment = holdings.reduce((acc, h) => {
    return acc + h.avg * h.qty;
  }, 0);
  return (
    <div className="container-fluid text-muted">
      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5">Holdings ({holdings.length})</h1>
        </div>
      </div>
      <div
        className={rowClass}
        style={{
          gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr",
          height: "32px",
        }}
      >
        <span className="mute">Instruments</span>
        <span className="mute">Qty</span>
        <span className="mute">Avg. cost</span>
        <span className="mute">Cur. value</span>
        <span className="mute">P&L</span>
        <span className="mute">Net chg</span>
        <span className="mute">Day chg</span>
      </div>

      {holdings.map((h, idx) => (
        <div
          key={idx}
          className={rowClass}
          style={{
            gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr",
            height: "32px",
          }}
        >
          <span>{h.name}</span>
          <span>{h.qty}</span>
          <span>{h.avg}</span>
          <span>{h.price}</span>
          <span
            className={parseFloat(h.net) > 0 ? "profit" : "loss"}
          >
            {h.pnl}
          </span>
          <span
            className={parseFloat(h.net) > 0 ? "profit" : "loss"}
          >
            {h.net}
          </span>
          <span
            className={parseFloat(h.day) > 0 ? "profit" : "loss"}
          >
            {h.day}
          </span>
        </div>
      ))}
      <div className="row my-5">
        <div className="col">
          <h2 className="fs-5">{format(totalInvestment)}</h2>
          <p className="mute" style={{ fontSize: "0.8rem" }}>
            Total investment
          </p>
        </div>
        <div className="col">
          <h2 className="fs-5">{format(curValue)}</h2>
          <p className="mute" style={{ fontSize: "0.8rem" }}>
            Current value
          </p>
        </div>
        <div className="col">
          <h2 className={totalPnL > 0 ? "profit fs-5" : "loss fs-5"}>{format(totalPnL)} <span className="">({((totalPnL / totalInvestment) * 100).toFixed(2)}%)</span></h2>
          <p className="mute" style={{ fontSize: "0.8rem"}}>P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
