import React, { useState, useEffect } from 'react';
import './main.scss';
const Main = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);


  }, []);
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: 'long', // Полное название дня недели
    year: 'numeric', // Год
    month: 'long',   // Полное название месяца
    day: 'numeric',  // День
  });


  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className='main .muktatitle'>
        <div className="main-time">{formattedTime}</div>
        <div className="main-date oswaldsubtitle"> 
            <div className="main-date__up-day">{formattedDate}</div>
        </div>
    </div>
  );
};

export default Main;