/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import './Banner.scss';
import colors from './data';

type Props = {
  text: string;
  style: () => void;
};

const Banner: React.FC<Props> = ({ text, style }) => {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const randomColor = () => Math.floor(Math.random() * colors.length);

  useEffect(() => {
    if (seconds <= 1000 && timerActive) {
      setTimeout(setSeconds, 1000, seconds + 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      alert('Priecīgus ziemassvētkus!');
      setTimerActive(true);
      return () => {
        clearTimeout(timeOut);
      };
    }, 1000);
  }, []);

  return (
    <div className="banner__wrapper">
      <div className="banner" style={{ color: colors[randomColor()] }}>
        {`${text} ${seconds}`}
      </div>
    </div>
  );
};

export default Banner;
