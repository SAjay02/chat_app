import React from 'react'
import "./chatlist.css"
import {Container} from "react-bootstrap"
const ChatList = ({chats}) => {
    const user = localStorage.getItem('user')
    function SenderChat({message,username,avatar})
    {
        return(
            <div className="chat_sender">
                <img src={avatar} alt=""/>
                <p>
                    <strong>{username} </strong>
                    <br/>{message}
                </p>
            </div>
        )
    }
    function ReceiverChat({message,username,avatar})
    {
        return(
            <div className="chat_receiver">
                <img src={avatar} alt=""/>
                <p>
                <strong>{username} </strong>
                    <br/>{ message}
                </p>
            </div>
        )
    }
  return (
    <div className="container chat_list">
        {chats.map((chat, index) => (
        chat.user === user ? (
          <SenderChat key={index} message={chat.message} username={chat.user} avatar={chat.avatar} />
        ) : (
          <ReceiverChat key={index} message={chat.message} username={chat.user} avatar={chat.avatar} />
        )
      ))}
    </div>
  )
}

export default ChatList