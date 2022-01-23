import "./App.css"
import RegistrationButton from "./Components/Buttons/RegistrationButton"
import Container from "./Components/Container/Container"
import MobileNumber from "./Components/MobileNumber/MobileNumber"
import RegistrationCircle from "./Components/RegistrationCircle/RegistrationCircle"
import { Routes, Route } from "react-router-dom"
import { Router } from "react-router-dom"
import LoginScreen from "./Pages/LoginScreen"
import Navbar from "./Components/Navbar"
import { HomeScreen } from "./Pages/HomeScreen"
import BillScreen from "./Pages/BillScreen"
import CampaignsScreen from "./Pages/CampaignsScreen"
import { TransactionHistory } from "./Pages/TransactionHistory"
import ProfileScreen from "./Pages/ProfileScreen"
// import PaymentPage from "./Pages/PaymentPage"

//Firebase Imports
import { authentication } from "./firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <div className='flex justify-center bg-black w-full h-100'>
            {" "}
            <Container>
              <ProfileScreen></ProfileScreen>
            </Container>
          </div>
        }
      />

      <Route
        exact
        path='/home'
        element={
          <div className='flex justify-center bg-black w-full h-100'>
            {" "}
            <Container>
              <HomeScreen></HomeScreen>
            </Container>
          </div>
        }
      />

      <Route
        exact
        path='/bill'
        element={
          <div className='flex justify-center bg-black w-full h-100'>
            {" "}
            <Container>
              <BillScreen></BillScreen>
            </Container>
          </div>
        }
      />

      <Route
        exact
        path='/campaigns'
        element={
          <div className='flex justify-center bg-black w-full h-100'>
            {" "}
            <Container>
              <CampaignsScreen />
            </Container>
          </div>
        }
      />

      <Route
        path='/login'
        element={
          <div className='flex justify-center bg-black w-full h-100'>
            <Container>
              <LoginScreen></LoginScreen>
            </Container>
          </div>
        }
      />

      {/* <Route exact path='/payment' element={<PaymentPage></PaymentPage>} /> */}

      <Route
        path='/transaction'
        element={
          <div className='flex justify-center bg-black w-full h-100'>
            <Container>
              <TransactionHistory></TransactionHistory>
            </Container>
          </div>
        }
      />
    </Routes>
  )
}

export default App
