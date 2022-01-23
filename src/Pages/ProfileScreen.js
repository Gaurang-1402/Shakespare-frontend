//Animation for Progressbar
import { easeQuadInOut } from "d3-ease"
import AnimatedProgressProvider from "../Components/AnimatedProgressProvider"

//Images
import teamSeas from "../images/teamseas-logo.png"
import redCross from "../images/redCross.png"
import habitatHumanity from "../images/habitatHumanity.png"

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import { useLocation } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import Navbar from "../Components/Navbar"
import { Container } from "../Components/Container/Container"
import React, { useEffect } from "react"

import StripeCheckout from "react-stripe-checkout"

import { toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import axios from "axios"

toast.configure()
const ProfileScreen = (props) => {
  const [initAmt, setInitAmount] = useState(19.38) // stored in state : contd. from stored state
  const [dispPercentage, setDisPercentage] = useState(96.9)
  const location = useLocation()

  useEffect(() => {
    if (location && location.state) {
      const totalAmount = location.state.totalAmount //Last Transaction
      console.log(location.state.totalAmount)
      let x = Math.ceil(totalAmount) - totalAmount // returns the spare change
      var percChange = ((initAmt + x) / 20) * 100 // return the percentage
      console.log(percChange) // update t
      setDisPercentage(percChange)
      setInitAmount(x + initAmt)
    }
  }, [])

  const handleToken = async (token) => {
    const amount = Math.floor(initAmt)

    try {
      const response = await axios.post(
        "https://shakespare-backend.herokuapp.com/checkout",
        {
          token,
          amount,
        }
      )
      const { status } = response.data
      console.log("Response:", response.data)
      if (status === "success") {
        toast("Success! Your donation has been recieved", { type: "success" })
        setInitAmount(20 - amount)
        setDisPercentage(((20 - amount) / 20) * 100)
      } else {
        toast("Something went wrong", { type: "error" })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className='text-white flex justify-center items-center flex-col mt-20'>
        <text className=' text-2xl font-bold'>Welcome, Evan</text>

        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={dispPercentage}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value)
            return (
              <CircularProgressbar
                value={value}
                strokeWidth={4}
                className='mt-10 w-2/5'
                styles={buildStyles({
                  textColor: "#FFFFFF",
                  pathColor: "#3498DB",
                  trailColor: "#0050BF",
                })}
              />
            )
          }}
        </AnimatedProgressProvider>
        <text className='-mt-28 text-3xl font-bold'>{`${dispPercentage}%`}</text>

        <text className='mt-24 font-bold text-2xl'>{`£${initAmt}`}</text>
        <text className='text-sm font-light text-gray-600 mb-2'>
          out of £20
        </text>
        {initAmt > 20 ? (
          <div className='z-50'>
            <StripeCheckout
              amount={initAmt * 100}
              stripeKey='pk_test_51KKrW7AmsBh1mzV2xe7fZmpkkcX2kWhRvIsXyFsIydrfvNZVW5EZZUQP0KWlu4HKe1t7kqagixwHIJiRnNEYht8w009EOuhKdg'
              token={handleToken}
            ></StripeCheckout>
          </div>
        ) : null}
        <div className='w-4/5 text-center mt-5 border-b-2 border-white pb-4'>
          <text className='font-light'>
            You need £{`${parseFloat(String(20 - initAmt)).toFixed(2)}`} in
            spare change to make a donation to Team Seas.
          </text>
        </div>
        <div className='w-4/5 flex flex-row justify-center mt-5'>
          <img src={teamSeas} className='w-1/6 h-1/6 mr-2' />
          <text className='ml-2 text-sm'>
            The campaign's goal is to raise 30 million USD to remove 30 million
            pounds of trash polluting coastal regions, rivers, and ultimately
            oceans.
          </text>
        </div>
        <div className='w-4/5 flex flex-row justify-center mt-5'>
          <img src={redCross} className='w-1/6 h-1/6 mr-2' />
          <text className='ml-2 text-sm'>
            The American Red Cross prevents and alleviates human suffering in
            the face of emergencies by mobilizing the power of volunteers and
            the generosity of donors.​
          </text>
        </div>
        <div className='w-4/5 flex flex-row justify-center mt-5'>
          <img src={habitatHumanity} className='w-1/6 h-1/6 mr-2' />
          <text className='ml-2 text-sm'>
            Seeking to put God’s love into action, Habitat for Humanity brings
            people together to build homes, communities and hope.
          </text>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  )
}

export default ProfileScreen
