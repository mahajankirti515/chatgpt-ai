import React, { createContext, useState } from 'react'
import run from '../gemini';

export const DataContext = createContext();
const UserContext = ({ children }) => {
 const [input, setInput] = useState('');
 const [showResult, setShowResult] = useState(false);
 const [loading, setLoading] = useState(false);
 const [resultData, setResultData] = useState('');
 const [recentPrompt, setRecentPrompt] = useState('');
 const [prevPrompt, setPrevPrompt] = useState([])

  function newchat () {
     setShowResult(false);
     setLoading(false);
  }

  async function sent(input) {
     setResultData("");
     setShowResult(true);
     setRecentPrompt(input);
     setLoading(true);
     setPrevPrompt(prev => [...prev, input]);
     let response = await run(input)
     setResultData(response.split("*") && response.split("*"));
     setLoading(false);
     setInput("");
  }

  const data = {
     sent,
     input,
     setInput,
     setShowResult,
     setLoading,
     setResultData,
     resultData,
     loading,
     showResult,
     recentPrompt,
     setRecentPrompt,
     prevPrompt,
     newchat
  }

  return (
    <DataContext.Provider value={data}>
       {children}
    </DataContext.Provider>
  )
}

export default UserContext;