import React from 'react'

const Funds = () => {
  return (
    <div className='container-fluid text-muted'>
      <div className="row mt-5">
        <div className="col-8 d-flex align-items-center justify-content-end">
          <p className='mute' style={{fontSize: "0.8rem"}}>Instant, zero-cost fund transfers with UPI</p>
        </div>
        <div className="col-4 d-flex gap-3">
          <button className='btn btn-success' style={{width: "40%"}}>Add funds</button>
          <button className='btn btn-primary' style={{width: "40%"}}>Withdrawl</button>
        </div>
      </div>
      <div className="row py-5">
        <div className="col">
            <h1 className='fs-5'> Avilable Margin: <span className='text-success'> 3425.7 </span></h1>
            <hr />
            <h1 className='fs-5'> Used Margin: <span className='text-success'> 25890 </span></h1>
        </div>
      </div>
      <div className="row text-center my-5">
        <div className="col">
        <p className='mute' style={{fontSize: "0.8rem"}}>You don't have a commodity account</p>
        <button className='btn btn-primary'>Open Account</button>
        </div>
      </div>
    </div>
  )
}

export default Funds