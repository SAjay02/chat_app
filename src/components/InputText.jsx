import React from 'react'
import "./inputtext.css"
import { Button } from 'react-bootstrap'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InputText = () => {
  return (
    <div className="inputtxt_cont">
        <textarea name='message' id='message' rows='6' placeholder="Write something...."></textarea>
        <Button variant="dark"><FontAwesomeIcon icon={faPaperPlane} style={{marginRight:"5px"}}/>Send</Button>
    </div>
  )
}

export default InputText