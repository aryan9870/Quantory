import React from 'react'

const StockActions = () => {
  return (
    <>
    <button className='btn btn-primary px-3 py-1'  style={{fontSize: "0.6rem"}}>B</button>
    <button className='btn btn-danger px-3 py-1' style={{fontSize: "0.6rem"}}>S</button>
    <button type="button" class="btn btn-info" style={{fontSize: "0.6rem"}}><i class="fa-solid fa-chart-simple"></i></button>
    <button type="button" class="btn btn-secondary" style={{fontSize: "0.6rem"}}><i class="fa-solid fa-ellipsis"></i></button>
    </>
  )
}

export default StockActions