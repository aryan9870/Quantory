import React from "react";
import {Tooltip} from '@mui/material';
import Button from '@mui/material/Button';
import { watchlist } from "../data/data";
import Stock from "./Stock";


const Watchlist = () => {
  return (
    <div className="container-fluid text-muted">
      <div className="row">
        <div className="col">
          <input type="text" placeholder="Search eg:infy, bse, nifty fut weekly, gold m" className="form-control search-input px-3 py-2"/>
        </div>
      </div>
      <div className="row ">
        <div className="col">
          <ul className="list-group list-group-flush overflow-auto" style={{ maxHeight: "80vh" }}>
            {watchlist.map((stk, idx) => {
              return <Stock key={idx}  stk={stk} idx={idx}/>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
