import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import './SideBar.css'
import { DataContext } from '../../context/UserContext';

const SideBar = () => {

    const[extend, setExtend] = useState(false);

    const {sent , prevPrompt, newchat} = useContext(DataContext);

    async function loaderPrevPrompt(prompt) {
        sent(prompt);
    }

  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='hambur' onClick={() => {setExtend(prev => !prev)}} />
         {console.log(extend)}
        <div className="newchat common" onClick={()=>{newchat()}}>
           <FaPlus />
           {extend ? <p>NewChat</p> : null}
        </div>
        {prevPrompt.map((item,index) => {
            return (
              <div className="recent common" key={index} onClick={()=>{
                 loaderPrevPrompt(item)
              }}>
              <IoChatbox />
              {extend ? <p>{item.slice(0,10)+"..."}</p> : null}
          </div>
            )
        })}

    </div>
  )
}

export default SideBar;