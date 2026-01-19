import React from 'react'

const RightSection = ({imgUrl, imgWidth, productName, productDescription, learnMore}) => {
  return (
    <div className="container p-5 text-muted">
      <div className="row align-items-center">
        <div className="col-4">
          <h1 className='mb-3'style={{fontSize: "1.5rem"}}>{productName}</h1>
          <p>{productDescription}</p>
          <div className='row mt-3'>
            <div className="col"><a className="text-decoration-none" href="">Learn more <i class="fa-solid fa-arrow-right-long"></i></a></div>
          </div>
        </div>
        <div className="col-8 text-end">
            <img className='' src={imgUrl} alt="" style={{width: `${imgWidth}%`}}/>
        </div>
      </div>
    </div>
  )
}

export default RightSection
