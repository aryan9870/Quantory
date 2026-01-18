import React from 'react'

const Education = () => {
  return (
    <div className="container p-5 text-muted mb-5">
      <div className="row">
        <div className="col-5"><img src="media/images/education.svg" style={{width: "100%"}} alt="" /></div>
        <div className="col-1"></div>
        <div className="col-6">
          <h1 className='mb-5' style={{fontSize: "1.5rem"}}>Free and open market education</h1>
          <div className='mb-4'>
            <p style={{fontSize: "1.1rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a className="text-decoration-none" href="">Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className=''>
            <p style={{fontSize: "1.1rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a className="text-decoration-none" href="">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education