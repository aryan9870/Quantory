import React from 'react'

const LeftSection = ({imgUrl, imgWidth, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className="container p-5 text-muted">
      <div className="row align-items-center">
        <div className="col-8 text-start">
            <img src={imgUrl} alt="" style={{width: `${imgWidth}%`}}/>
        </div>
        <div className="col-4">
          <h1 className='mb-3'style={{fontSize: "1.5rem"}}>{productName}</h1>
          <p>{productDescription}</p>
          <div className='row mt-3'>
            <div className="col"><a className="text-decoration-none" href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right-long"></i></a></div>
            <div className="col"><a className="text-decoration-none" href={learnMore}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a></div>
          </div>
          <div className='row mt-3'>
            <div className="col">
                  <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
            </div>
            <div className="col">
                  <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection