import React from 'react'
import Dp from '../img/10.jpg'
import Pic from '../img/car.jpeg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Dp} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello buddy</p>
        <img src={Pic} alt="" />
      </div>
      
    </div>
  )
}

export default Message
