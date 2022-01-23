import React from "react";

const RegistrationButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ textDecoration: "none" }}
      className="no-underline text-lg bg-white text-blueInput w-36 h-9 rounded-xl text-center"
    >
      {props.message}
    </button>
  );
};

export default RegistrationButton;
