import React from "react";

const MobileNumber = () => {
  return (
    <div className="flex no-underline">
      <div className="no-underline text-white text-center bg-blueInput rounded-xl w-24 h-14 mr-2">
        +44
      </div>
      <input className=" no-underline bg-blueInput text-white w-64 h-14 rounded"></input>
    </div>
  );
};

export default MobileNumber;
