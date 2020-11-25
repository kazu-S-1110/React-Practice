import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  const time = () => {
    setCount((prevcount) => prevcount + 1);
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);
    return () => {
      // このコンポーネントが無効（非表示）になった際の処理を記述
      clearInterval(interval);
      console.log('cleared!');
    };
  }, []);
  return <div>{count} </div>;
};

export default Timer;
