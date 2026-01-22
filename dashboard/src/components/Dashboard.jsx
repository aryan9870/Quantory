import React from 'react'
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import Apps from './Apps'
import { Routes, Route } from "react-router-dom";


const Dashboard = () => {
  return (
    <>
    <Routes>
      <Route index element={<Summary />} />
      <Route path="orders" element={<Orders />} />
      <Route path="holdings" element={<Holdings />} />
      <Route path="positions" element={<Positions />} />
      <Route path="funds" element={<Funds />} />
      <Route path="apps" element={<Apps />} />
    </Routes>
    </>
  )
}

export default Dashboard