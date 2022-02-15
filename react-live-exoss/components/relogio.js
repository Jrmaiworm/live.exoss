import React, { useEffect, useState } from "react";
const date = new Date();
export default function Relogio() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{display:"flex",
    justifyContent:"center"
    }}>
      <div>
       <span>Horário Local </span> {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </div>
    </div>
  );
}

  
 
