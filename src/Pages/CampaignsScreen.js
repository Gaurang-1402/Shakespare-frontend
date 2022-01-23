import React from "react"
import RegistrationButton from "../Components/Buttons/RegistrationButton"
import Navbar from "../Components/Navbar"
import one from "../images/Campaigns/1.png"
import two from "../images/Campaigns/2.png"
import three from "../images/Campaigns/3.png"
import four from "../images/Campaigns/4.png"

const CampaignsScreen = () => {
  return (
    <div>
      <div
        className='absolute z-50 bg-blueInput w-90 h-90 text-center rounded-xl'
        style={{
          left: "80px",
          top: "90px",
          width: "320px",
          height: "45px",
        }}
      >
        <h2
          style={{ fontSize: "31px", paddingTop: "5px" }}
          className='text-white text-xl z-50 mt-1'
        >
          Discover Campaigns
        </h2>
      </div>
      <div
        className='absolute z-50 flex'
        style={{
          left: "35px",
          top: "180px",
        }}
      >
        <img src={one} alt='1'></img>
      </div>

      <div
        className='absolute z-50 flex'
        style={{
          left: "35px",
          top: "290px",
        }}
      >
        <img src={two} alt='1'></img>
      </div>
      <div
        className='absolute z-50 flex'
        style={{
          left: "35px",
          top: "400px",
        }}
      >
        <img src={three} alt='1'></img>
      </div>

      <div
        className='absolute z-50 flex'
        style={{
          left: "30px",
          top: "530px",
        }}
      >
        <img src={four} alt='1'></img>
      </div>
      <div
        className='absolute z-50 flex'
        style={{
          left: "160px",
          top: "710px",
        }}
      >
        <button
          style={{ textDecoration: "none" }}
          className='no-underline text-lg bg-white text-blueInput w-36 h-9 rounded-xl text-center'
        >
          Donate
        </button>
      </div>

      <Navbar></Navbar>
    </div>
  )
}

export default CampaignsScreen
