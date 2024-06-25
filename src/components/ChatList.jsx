import React from 'react'
import "./chatlist.css"
import {Container} from "react-bootstrap"
const ChatList = () => {
    function SenderChat()
    {
        return(
            <div className="chat_sender">
                <img src="https://picsum.photos/id/237/200/300" alt=""/>
                <p>
                    <strong>Ajay</strong>
                    message
                </p>
            </div>
        )
    }

    function ReceiverChat()
    {
        return(
            <div className="chat_receiver">
                <img src="https://picsum.photos/id/237/200/300" alt=""/>
                <p>
                    <strong>Ajay</strong>
                    message
                </p>
            </div>
        )
    }
  return (
    <Container>
        <SenderChat/>
        <ReceiverChat/>
    </Container>
  )
}

export default ChatList