// Import Libraries
import React, { useState } from "react";

const RegistrationSucessful = (props) => {
  const onClickHandler = () => {
    console.log("Button Pressed");
  };

  return (
    <div class="w-4/5 h-1/2 flex flex-col p-3 bg-white rounded-3xl items-center text-center self-center">
      <text class="text-3xl font-bold  text-blue-800">
        Transaction Successful!
      </text>
      <button
        onClick={onClickHandler}
        class="w-48 p-2 text-center bg-blue-900 rounded-3xl"
      >
        <text class=" text-white font-semibold">Continue</text>
      </button>
    </div>
  );
};

export default RegistrationSucessful;
