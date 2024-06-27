import React, { useState } from 'react'
import "./inputtext.css"
import { Button } from 'react-bootstrap'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InputText = ({addMessage}) => {
  const [message,setMessage]=useState();
  const sendMessage = ()=>
    {
        addMessage(message);
        setMessage('');
        console.log('Cannot send empty message');
        console.log("msg"+message)
    }
  return (
    <div className="inputtxt_cont">
        <textarea name='message' id='message' rows='6' placeholder="Write something...."
        onChange={(e)=>e.target.value} ></textarea>
        <Button onClick={sendMessage} variant="dark"><FontAwesomeIcon icon={faPaperPlane} style={{marginRight:"5px"}}/>Send</Button>
    </div>
  )
}

export default InputText