import { Container } from "../Components/Container/Container"
import React, { useState } from "react"
import RegistrationCircle from "../Components/RegistrationCircle/RegistrationCircle"
import boy from "../images/registerboy.png"
import signgoogle from "../images/signgoogle.png"
import FeatherIcon from "feather-icons-react"
import { useNavigate } from "react-router-dom"

//Firebase Imports
import { authentication } from "../firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const LoginScreen = (props) => {
  const [data, setData] = useState({
    email: "",
  })

  const navigate = useNavigate()

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re)
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onChangeHandler = (val) => {
    setData({
      ...data,
      data: val,
    })
  }

  const onSubmitHandler = () => {
    console.log("works")
  }
  return (
    <div className='text-white'>
      <div
        className='absolute my-3 w-4/5'
        style={{
          width: "128px",
          height: "64px",
          left: "160px",
          top: "200px",
        }}
      >
        <RegistrationCircle src={boy} />
        <h2 className='pt-4 text-center'>Sign in with Google</h2>
      </div>

      <div
        className='absolute'
        style={{
          left: "130px",
          top: "700px",
        }}
      >
        <div className='relative z-50'>
          <button className='z-50' onClick={signInWithGoogle}>
            <img alt='sign up' src={signgoogle}></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
