import React, { useEffect, useState } from 'react'
import "./chat.css"
import ChatList from './ChatList'
import InputText from './InputText'
import User from "./User"
import socketIOClient from "socket.io-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
const Chat = () => {
    const [user,setUser]=useState(localStorage.getItem('user'));
    const socketIO = socketIOClient("http://localhost:3001");

    const [chat,setChat]=useState([]);
    console.log(chat);
    useEffect(()=>
    {
        socketIO.on('chat',(chats)=>
        {
            setChat(chats);
        })
        return () => {
            socketIO.off('chat')
          };
    },[chat])

       const sendToSocket = (chat) =>
        {
            socketIO.emit('chat',chat);
        }
        const addMessage = (message) =>
        {
            const newChat = {
                user:localStorage.getItem('user'),
                avatar:localStorage.getItem('avatar'),
                message
            }
            const updatedChat = [...chat, newChat];
            setChat(updatedChat);
            // setChat([...chat,newChat]);
            sendToSocket(updatedChat)
        }

    const logout = () =>
        {
            localStorage.removeItem('user');
            localStorage.removeItem('avatar');
            setUser('');
        }
  return (
    <div style={{marginTop:"10px"}}>
        {user?(
            <div className="chat_head_cont">
                <div className="chat_head">
                    <h5>
                        <FontAwesomeIcon style={{marginRight:"5px"}} icon={faUserSecret}  />Hello {user}
                    </h5>
                    {/* <h6>
                        Let's make your conversion together😊
                    </h6> */}
                    <h5 onClick={logout}>
                        <strong>Logout</strong>
                        <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faRightFromBracket}  />
                    </h5>
                </div>
            <ChatList chats={chat}/>
            <InputText addMessage={addMessage}/>
        </div>
        ):
        <User setUser={setUser}/>
        }
    </div>
  )
}

export default Chat