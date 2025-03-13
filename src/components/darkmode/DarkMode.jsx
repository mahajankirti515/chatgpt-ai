import React, { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import "./DarkMode.css";

const DarkMode = () => {
  const [mode, setMode] = useState("darkmode");

  let toggle = () => {
    if (mode === "darkmode") {
      setMode("lightmode");
    } else {
      setMode("darkmode");
    }
  };

  useEffect(() => {
     document.body.className=mode
  },[mode])

  return (
    <div>
        
      <button
        className="darkmode_btn"
        onClick={() => {
          toggle()
          console.log(mode);
        }}
      >
        <IoSunny />
      </button>
    </div>
  );
};

export default DarkMode;
