import React, { useState } from 'react'
import "./chat.css"
import ChatList from './ChatList'
import InputText from './InputText'
import User from "./User"
const Chat = () => {
    const [user,setUser]=useState(localStorage.getItem('user'));
  return (
    <div style={{marginTop:"50px"}}>
        {user?(
        <div>
            <div className="chat_head">
                <h4>
                    Ajay
                </h4>
                <p>
                    Let's make your conversions😊
                </p>
                <p>
                    <strong>Logout</strong>
                </p>
            </div>
            <ChatList/>
            <InputText/>
        </div>
        ):
        <User setUser={setUser}/>
        }
    </div>
  )
}

export default Chat