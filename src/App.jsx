import React, { useContext } from 'react'
import SideBar from './components/sidebar/SideBar';
import ChatBox from './components/chatBox/ChatBox';
import Seperation from './components/seperation/Seperation';


const App = () => {
  return (
    <>
      <SideBar />
      <Seperation />
      <ChatBox />
    </>
  )
}

export default App;
