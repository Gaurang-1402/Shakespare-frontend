import React from "react"
import Navbar from "../Components/Navbar"
import userImg from "../images/user.png"
import notificationImg from "../images/notifitcation.png"
import mrbeastImg from "../images/mrbeast.png"
import giftImg from "../images/component_assets/gift.png"
import refImg from "../images/component_assets/referral.png"
import PewdiepieImg from "../images/Ethereum.png"
import { Link } from "react-router-dom"

export const HomeScreen = () => {
  return (
    <div>
      <div
        className='absolute'
        style={{
          width: "350px",
          // height: "64px",
          left: "50px",
          top: "50px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              position: "relative",
            }}
          >
            <div className='z-50'>
              <Link to='/'>
                <button>
                  <img alt='User Profile' src={userImg}></img>
                </button>
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row-reverse",
            }}
          >
            <img alt='Notification' src={notificationImg}></img>
          </div>
        </div>
        <div>
          <p className='text-white text-xl'>Welcome back, Evan! 👋🏼</p>
          <div className='flex flex-row justify-start items-start'>
            <div
              style={{
                marginTop: "30px",
                backgroundColor: "#002966",
                padding: "10px",
                marginRight: 10,
                borderRadius: 10,
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  alt='Mr Beast'
                  src={mrbeastImg}
                  style={{ height: "20px", width: "20px" }}
                ></img>
                <p
                  style={{
                    color: "#FFD232",
                    marginLeft: "10px",
                    fontSize: "0.7rem",
                  }}
                >
                  Mr. Beast- Team Seas
                </p>
              </div>
              <div>
                <p
                  className='text-white'
                  style={{ fontSize: "0.6rem", marginTop: 10 }}
                >{`Total Collected:  £238,291`}</p>
              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                backgroundColor: "#002966",
                padding: "10px",
                borderRadius: 10,
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  alt='Pewdiepie Charity'
                  src={PewdiepieImg}
                  style={{ height: "20px", width: "20px" }}
                ></img>
                <p
                  style={{
                    color: "#FFD232",
                    marginLeft: "10px",
                    fontSize: "0.7rem",
                  }}
                >
                  Pewdiepie Charity
                </p>
              </div>
              <div>
                <p
                  className='text-white'
                  style={{ fontSize: "0.6rem", marginTop: 10 }}
                >{`Total Collected:  £38,291`}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#0050BF",
              margin: 20,
              borderRadius: 10,
              padding: 10,
              marginTop: 40,
            }}
          >
            <div className='flex flex-row'>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: "0.7rem" }}>
                  Balance (£)
                </p>
              </div>

              <p
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row-reverse",
                  color: "#FFFFFF",
                  fontSize: "0.7rem",
                }}
              >
                Today Spare change Today(£)
              </p>
            </div>
            <div className='flex flex-row'>
              <p className='text-white font-bold'>1,153.88</p>
              <p
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row-reverse",
                }}
                className='text-white font-bold'
              >
                0.40
              </p>
            </div>
            <div
              style={{
                height: 1,
                backgroundColor: "#fff",
                marginTop: 15,
                marginBottom: 15,
              }}
            />
            <div className='flex flex-row'>
              <p className='text-white font-bold'>• 🍕 Pizza (x1)</p>
              <p
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row-reverse",
                  color: "#38FFA1",
                }}
                className='font-bold'
              >
                <p
                  style={{
                    color: "#1AFFF1",
                    fontSize: "0.6rem",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  {"(~35.79)"}
                </p>
                {" +36.00 "}
              </p>
            </div>
            <div className='flex flex-row'>
              <p className='text-white font-bold'>• ☕ Cappuccino (x1)</p>
              <p
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row-reverse",
                  color: "#38FFA1",
                }}
                className='font-bold'
              >
                <p
                  style={{
                    color: "#1AFFF1",
                    fontSize: "0.6rem",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  {"(~25.81)"}
                </p>
                {" +26.00 "}
              </p>
            </div>
          </div>
          <img alt='Notification' src={giftImg}></img>
          <img alt='Notification' src={refImg}></img>
        </div>
      </div>

      <Navbar></Navbar>
    </div>
  )
}
