import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = (props) => {
  const [time, setTime] = useState(
    props.date.toLocaleString('default', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
  );

  const full_date = props.date.toLocaleString('default', {
    weekday: 'long',
  });

  const weekday = props.date.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleString('default', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });

      setTime(time);
    }, 1000);
  }, []);

  return (
    <div className="header__container">
      <h1 className="header__title">Clockwork</h1>
      <aside>
        <div>
          <div className="header__data">{full_date}</div>
          <div className="header__day">{weekday}</div>
          <div className="header__time">{time}</div>
        </div>
      </aside>
    </div>
  );
};

export default Header;
