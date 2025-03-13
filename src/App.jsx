import React, { useContext } from 'react'
import SideBar from './components/Sidebar/SideBar';
import ChatBox from './components/ChatBox/ChatBox';
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