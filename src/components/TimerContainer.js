import React, { useState } from 'react';
import Timer from './Timer';

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {display && <Timer />} {/* displayの値によって表示のオンオフを切り替え */}
    </div>
  );
};

export default TimerContainer;
