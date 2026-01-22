import React from 'react'
import Topbar from './Topbar'
import Dashboard from './Dashboard'
import Watchlist from './Watchlist'

const Home = () => {
  return (
    <>
    <Topbar />
    <div className="container-fluid" style={{ height: "calc(100vh - 63px)" }}>
    <div className="row border h-100">
      <div className="col-4 border h-100"><Watchlist /></div>
      <div className="col-8 border h-100 overflow-auto"><Dashboard /></div>
    </div>  
    </div>
    </>
  )
}

export default Home