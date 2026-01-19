import React from 'react'

const Team = () => {
  return (
    <div className='container p-5 text-muted border-top'>
      <div className="row text-center mb-5">
        <h1 style={{fontSize: "1.5rem"}}>Pepole</h1>
      </div>
      <div className="row align-items-center">
        <div className="col-5 text-center">
          <img src="media/images/nithinKamath.jpg" alt="" style={{width: "70%", borderRadius: "50%"}}/>
        </div>
        <div className='col-7' style={{fontSize: "1.1rem"}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis, earum alias qui repellendus exercitationem autem impedit, quo architecto, ad cumque? Itaque in nobis aliquid est iste repellat mollitia corrupti!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis inventore ipsum eos voluptas? Ipsam in aliquam molestiae quibusdam voluptates?</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-5 text-center">
          <p className='fs-4'>Aryan Singh</p>
          <p>Full-stack Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Team