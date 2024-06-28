import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-bootstrap"
import "./user.css"
import _ from "lodash"
const User = ({setUser}) => {
  const[userName,setUserName]=useState();
  const handleuser =()=>
    {
      if(!userName)
      return;
      localStorage.setItem('user',userName);
      setUser(userName)
      localStorage.setItem('avatar',`https://picsum.photos/id/${_.random(1,1000)}/200/300`)
    }
  return (
    <div className="cont">
        <div className="first_cont">
            <h4 className="first_cont_head"><FontAwesomeIcon style={{marginRight:"10px"}} icon={faUserSecret} flip />Group Chat👻</h4>
        </div>
        <div className="second_cont">
            <input className="second_cont_inpt" placeholder="Give Your Name" onChange={(e)=>setUserName(e.target.value)}/>
            <Button className="second_cont_btn" onClick={handleuser}>Login</Button>
        </div>
    </div>
  )
}

export default User