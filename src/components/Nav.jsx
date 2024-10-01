import React, { useState } from 'react'

const Nav = () => {

  let time =new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(() => {
    updateTime();
  }, 1000);

  return (
    <div>
      <h1>
        {currentTime}
      </h1>
      {/* <button onClick={()=>setCurrentTime(new Date().toLocaleTimeString())}>Get Time</button> */}
    </div>
  )
}

export default Nav