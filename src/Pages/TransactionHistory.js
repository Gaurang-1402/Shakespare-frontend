import React from "react";
import Navbar from "../Components/Navbar";
import notificationImg from "../images/notifitcation.png";
import plannerImg from "../images/Planner.png";
import firstDonation from "../images/component_assets/1stdonation.png";
import secondDonation from "../images/component_assets/2nddonation.png";
export const TransactionHistory = () => {
  return (
    <div>
      <div
        className="absolute"
        style={{
          width: "350px",
          // height: "64px",
          left: "50px",
          top: "60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              //   flex: 1,
              alignSelf: "center",
            }}
          >
            <p className="text-white font-bold text-xl">Transcaction History</p>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row-reverse",
            }}
          >
            <img alt="Notification" src={notificationImg}></img>
          </div>
        </div>
        <div
          style={{
            margin: 10,
            marginTop: 30,
            backgroundColor: "#0050BF",
            borderRadius: 15,
            padding: 15,
            display: "flex",
          }}
        >
          <p className="text-white">{"Charity Donation Status"}</p>
          <p
            className="text-white"
            style={{ display: "flex", flex: 1, flexDirection: "row-reverse" }}
          >
            {">"}
          </p>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <div className="flex flex-row">
            <p
              className="text-white font-bold text-base flex flex-row"
              style={{ flex: 1, alignSelf: "center" }}
            >
              {"TRANSACTION HISTORY"}
            </p>
            <img src={plannerImg} alt="Planner" />
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <p
              style={{
                display: "flex",
                flex: 2.5,
                color: "#00D1FF",
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              Transaction Amt.
            </p>
            <p
              style={{
                display: "flex",
                flex: 1,
                color: "#FAFC98",
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              Round off
            </p>
            <p
              className="text-center"
              style={{
                display: "flex",
                flex: 1,
                color: "#7AFF77",
                textAlign: "center",
                fontWeight: "bolder",
                flexDirection: "row-reverse",
              }}
            >
              Saved
            </p>
          </div>
          <div
            style={{
              height: 3,
              backgroundColor: "grey",
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <div className="flex flex-row">
            <p
              style={{
                display: "flex",
                flex: 2.5,
                color: "#00D1FF",
                textAlign: "center",
                fontSize: 12,
                color: "#fff",
                fontWeight: "bolder",
              }}
            >
              • 🍕 Pizza (x1) — <p style={{ color: "#00D1FF" }}>£35.79</p>
            </p>
            <p
              style={{
                display: "flex",
                flex: 1,
                color: "#FAFC98",
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              £ 36.00
            </p>
            <p
              style={{
                display: "flex",
                flex: 1,
                color: "#7AFF77",
                textAlign: "center",
                fontWeight: "bolder",
                flexDirection: "row-reverse",
              }}
            >
              £ 00.21
            </p>
          </div>
          <div className="flex flex-row">
            <p
              style={{
                display: "flex",
                flex: 2.5,
                color: "#00D1FF",
                fontSize: 12,
                color: "#fff",
                fontWeight: "bolder",
              }}
            >
              • ☕ Cappuccino (x1) —<p style={{ color: "#00D1FF" }}>£25.81</p>
            </p>
            <p
              style={{
                display: "flex",
                flex: 1,
                color: "#FAFC98",
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              £ 36.00
            </p>
            <p
              style={{
                display: "flex",
                flex: 1,
                color: "#7AFF77",
                textAlign: "center",
                fontWeight: "bolder",
                flexDirection: "row-reverse",
              }}
            >
              £ 00.21
            </p>
          </div>
          <div
            style={{
              height: 3,
              backgroundColor: "grey",
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <div className="flex flex-row-reverse">
            <p style={{ color: "#7AFF77", fontWeight: "bolder" }}>
              &nbsp;£ 00.40&nbsp;
            </p>
            <p>{"    "}</p>
            <p className="text-white font-bold">SAVED &nbsp;:&nbsp;</p>
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <p className="text-white font-bold">DONATIONS</p>

          <div className="flex flex-row" style={{ marginTop: 20 }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#00D1FF",
                  justifyContent: "center",
                  textAlign: "center",
                  marginLeft: 20,
                }}
              >
                One time Donations
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
              }}
            >
              <p
                style={{
                  marginLeft: 35,
                  color: "grey",
                }}
              >
                Auto Donations
              </p>
            </div>
          </div>
          <div
            style={{
              height: 2,
              backgroundColor: "grey",
              marginBottom: 10,
            }}
          />
          <img src={firstDonation} alt="First Donation" />
          <img src={secondDonation} alt="Second Donation" />
        </div>
      </div>

      <Navbar></Navbar>
    </div>
  );
};
