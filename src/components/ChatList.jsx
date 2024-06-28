import React, { useEffect } from 'react'
import { useRef } from 'react'
import "./chatlist.css"
import {Container} from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner';
const ChatList = ({chats}) => {
  const endOfMessage = useRef()
    const user = localStorage.getItem('user')
    function SenderChat({message,username,avatar})
    {
        return(
            <div className="chat_sender">
                <img src={avatar} alt=""/>
                <p style={{color:"white"}}>
                    <strong style={{color:"black"}}>{username} </strong>
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
    useEffect(()=>
    {
      ScrollBottom()
    },[chats])

    const ScrollBottom = () =>
      {
        endOfMessage.current?.scrollIntoView({behavior:"smooth"})
      }
  return (
    <div className="container chat_list">
        {chats.length>0? chats.map((chat, index) => (
        chat.username === user ? (
          <SenderChat key={index} message={chat.message} username={chat.username} avatar={chat.avatar} />
        ) : (
          <ReceiverChat key={index} message={chat.message} username={chat.username} avatar={chat.avatar} />
        )
      )): <Spinner animation="border" variant="primary" />}
      <div ref={endOfMessage}></div>
    </div>
  )
}

export default ChatList