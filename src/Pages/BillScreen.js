import React, { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"
import billheader from "../images/ImageComponents/billheader.png"
import upload from "../images/ImageComponents/upload.png"
import photo from "../images/ImageComponents/photo.png"
import RegistrationButton from "../Components/Buttons/RegistrationButton"
import payments from "../images/ImageComponents/payments.png"
import demo from "../images/ImageComponents/demo.png"
import chat from "../images/ImageComponents/chat.png"
import ScrollArea from "react-scrollbar"
import { useNavigate } from "react-router-dom"
import { createWorker } from "tesseract.js"
import notificationImg from "../images/notifitcation.png"
import Tesseract from "tesseract.js"

const BillScreen = () => {
  const worker = createWorker({
    logger: (m) => console.log(m),
  })

  const navigate = useNavigate()

  const recogText = useRef(null)
  const [imagePath, setImagePath] = useState()
  const [recText, setRecText] = useState(null)
  const [totalAmount, setTotalAmount] = useState()
  const [showQR, setShowQR] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleChange = (event) => {
    console.log("image uploaded")
    setImagePath(URL.createObjectURL(event.target.files[0]))
    setLoading(true)
    // setTimeout(() => {
    //   handleClick(event);
    // }, 1000);
  }

  useEffect(() => {
    handleClick()
  }, [imagePath])

  const extractTotal = () => {
    console.log(recogText)
    let a = recogText.split("total")[1]
    let b = a.match(/(\d+)/)[0]
    console.log("total", b)
    setTotalAmount(b)
  }

  const handleQR = () => {
    setShowQR(true)
  }

  const handleClick = async (e) => {
    // e.preventDefault();
    console.log("clicked")

    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const {
      data: { text },
    } = await worker.recognize(imagePath)
    setRecText(text)
    // analyseText(text);
    console.log(JSON.stringify(text))
    setLoading(false)
    await worker.terminate()
  }

  function extractNumber(string) {
    return Number(string.replace(/[^0-9\.]+/g, ""))
  }

  const analyseText = (txt) => {
    const sliptText = txt.split("\n")
    let lineTxt = ""
    sliptText.map((txt) => {
      if (txt.toLowerCase().includes("total")) {
        lineTxt = txt
      }
    })
    // console.log(">>>>>LINE TEXT IS:  ", lineTxt);
    // console.log(">>>>>NUMBER TEXT IS:  ", extractNumber(lineTxt));
    navigate("/", { state: { totalAmount: extractNumber(lineTxt) } })
  }

  return (
    <div>
      <div
        className='absolute z-50'
        style={{
          width: "350px",
          left: "60px",
          top: "70px",
        }}
      >
        <ScrollArea
          speed={0.4}
          className='px-4'
          contentClassName='content'
          style={{ height: "750px" }}
          horizontal={false}
          vertical={true}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                //   flex: 1,
                alignSelf: "center",
              }}
            >
              <h2 className='text-white text-xl z-50'>Quick Explore</h2>
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
          <img src={billheader}></img>

          <div
            className='text-white rounded-lg flx'
            style={{
              padding: 20,
              backgroundColor: "#002966",
              // width: "360px",
              // height: "180px",
            }}
          >
            <div className='flex flex-row'>
              {/* <button style={{ display: "flex", flex: 1, marginLeft: 40 }}>
                {/* <img src={upload}></img> */}
              {/* <input
                type="file"
                onChange={handleChange}
                id="file-upload"
                className="hidden"
              /> */}
              {/* <input type="file" name="file" onChange={handleChange} />
              </button> */}
              <div style={{ display: "flex", flex: 1, marginLeft: 40 }}>
                <label htmlFor='myInput'>
                  <img style={{ fontSize: "20px" }} src={upload} />
                </label>
                <input
                  id='myInput'
                  style={{ display: "none" }}
                  type={"file"}
                  onChange={handleChange}
                />
              </div>

              <button style={{ marginLeft: 0, display: "flex", flex: 1 }}>
                <img src={photo}></img>
              </button>
            </div>
            {imagePath ? (
              <img
                src={imagePath}
                alt=''
                style={{
                  height: 300,
                  width: 300,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
            ) : null}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p
                style={{
                  "white-space": "pre-wrap",
                  textAlign: "center",
                }}
              >
                {recText}
              </p>
            )}

            <div
              // className="absolute z-50"
              style={{
                margin: 20,
                marginLeft: 55,
              }}
            >
              {!loading ? (
                <RegistrationButton
                  onClick={() => analyseText(recText)}
                  message={"Next"}
                ></RegistrationButton>
              ) : null}
            </div>
          </div>
          {/* <img src={billheader}></img> */}
          <button style={{ marginTop: 20 }}>
            <img src={payments}></img>
          </button>
          <button style={{ marginTop: 10 }}>
            <img src={demo}></img>
          </button>
          <button style={{ marginLeft: 30 }}>
            <img src={chat}></img>
          </button>
        </ScrollArea>
      </div>
      {/* <div
        // classNxame="absolute z-50"
        style={{
          left: "20px",
          top: "100px",
        }}
      >
        <img src={billheader}></img>
      </div> */}

      {/* <div
        className="absolute z-50"
        style={{
          left: "40px",
          top: "450px",
        }}
      >
        <button>
          <img src={payments}></img>
        </button>
      </div> */}
      {/* <div
        className="absolute z-50"
        style={{
          left: "30px",
          top: "550px",
        }}
      >
        <button>
          <img src={demo}></img>
        </button>
      </div>

      <div
        className="absolute z-50"
        style={{
          left: "110px",
          top: "680px",
        }}
      >
        <button>
          <img src={chat}></img>
        </button>
      </div> */}

      <Navbar></Navbar>
    </div>
  )
}

export default BillScreen
