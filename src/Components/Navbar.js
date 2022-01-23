import React from "react";
import home from "../images/home.png";
import note from "../images/note.png";
import donation from "../images/donation.png";
import transaction from "../images/transaction.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="absolute z-50"
      style={{
        left: "30px",
        bottom: "30px",
      }}
    >
      <div
        className="bg-white z-30 border-4 flex items-center mx-0 "
        style={{ width: "400px", height: "60px", bottom: "0px" }}
      >
        <Link to="/home">
          <button
            className="m-auto text-xs  flex-col items-center border-2"
            style={{ width: "100px", height: "55px" }}
          >
            <img
              style={{ paddingLeft: "7px", paddingTop: "5px" }}
              src={home}
            ></img>
            <p className="mt-1">Home</p>
          </button>
        </Link>
        <Link to="/bill">
          <button
            className="m-auto text-xs  flex-col items-center   border-2"
            style={{ width: "100px", height: "55px" }}
          >
            <img
              style={{ paddingLeft: "5px", paddingTop: "5px" }}
              src={note}
            ></img>
            <p className="mt-1">Bills</p>
          </button>
        </Link>
        <Link to="/transaction">
          <button
            className="m-auto text-xs  flex-col items-center   border-2"
            style={{ width: "100px", height: "55px" }}
          >
            <img
              style={{ paddingLeft: "15px", paddingTop: "5px" }}
              src={donation}
            ></img>
            <p className="mt-1">Transactions</p>
          </button>
        </Link>
        <Link to="/campaigns">
          <button
            className="m-auto text-xs  flex-col items-center   border-2"
            style={{ width: "100px", height: "55px" }}
          >
            <img
              style={{ paddingLeft: "12px", paddingTop: "5px" }}
              src={transaction}
            ></img>
            <p className="mt-1">Campaigns</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
