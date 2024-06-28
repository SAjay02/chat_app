import React, { useState } from 'react'
import "./inputtext.css"
import { Button } from 'react-bootstrap'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InputText = ({addMessage}) => {
  const [message,setMessage]=useState();
  // console.log("msg"+message)
  const sendMessage = ()=>
    {
        if(message!==undefined)
        {
          addMessage(message);
          setMessage('');
        }
        else
        console.log("msg"+message);
        // console.log("msg"+addMessage)
    }
  return (
    <div className="inputtxt_cont">
        <textarea name='message' id='message' rows='6' placeholder="Write something...."
        onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
        <Button onClick={sendMessage} variant="dark"><FontAwesomeIcon icon={faPaperPlane} style={{marginRight:"5px"}}/>Send</Button>
    </div>
  )
}

export default InputText