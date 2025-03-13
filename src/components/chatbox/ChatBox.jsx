import React, { useContext } from "react";
import "./ChatBox.css";
import DarkMode from "../darkmode/DarkMode";
import { LuSendHorizontal } from "react-icons/lu";
import { DataContext } from "../../context/UserContext";
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";

const ChatBox = () => {
  let { sent, input, setInput, showResult, resultData, recentPrompt, loading } =
    useContext(DataContext);

  return (
    <div className="chatbox">
      <div className="chatbox-contain ">
        <div className="top-section ">
          {!showResult ? (
            <div className="headings">
              <span>HELLO KIRTI...,</span>
              <span>I'M Your Own Assistant</span>
              <span>What can I Help You...?</span>
            </div>
          ) : (
            <div className="result">
              <div className="userbox">
                <img src={user} alt="" width="50px" />
                <p>{recentPrompt}</p>
              </div>
              <div className="ai_box">
                <img src={ai} alt="" width="50px" />
                {loading ? (
                  <p className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </p>
                ) : (
                  <p>{resultData}</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="bottom-section">
          <input
            type="text"
            placeholder="Enter a prompt..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          {input ? (
            <button
              className="sendbtn"
              onClick={() => {
                sent(input);
              }}
            >
              <LuSendHorizontal />
            </button>
          ) : null}

          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
