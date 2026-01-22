import React, { useState } from "react";
import StockActions from "./stockActions";

const Stock = ({ stk, idx }) => {

    const [showWatchlistActions, setshowWatchlistActions] = useState(false);

    const handleMouseEnter = () => {
        setshowWatchlistActions(true);
    }

    const handleMouseLeave = () => {
        setshowWatchlistActions(false);
    }

  return (
    <li key={idx} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      className="list-group-item border-bottom border-top d-flex align-items-center justify-content-between list-hover py-3"
      style={{ fontSize: "0.8rem" }}
    >
      <div className={stk.isDown ? "loss col-6" : "profit col-6"}>{stk.name}</div>
      {showWatchlistActions ? <div className="col-6 d-flex justify-content-end gap-2"><StockActions /></div>: <div className="col-6 d-flex justify-content-end gap-2">
        <span>{stk.price}</span>
        <span>{stk.isDown ? <i className="fa-solid fa-angle-down loss"></i> : <i className="fa-solid fa-angle-up profit"></i>}</span>
        <span className={stk.isDown ? "loss" : "profit"}>{stk.percent}</span>
      </div>}
    </li>
  );
};

export default Stock;