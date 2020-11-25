import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };
  const AddCount2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const isOdd = useMemo(() => {
    let i = 0;
    while (i < 50000000000) {
      i++;
      return count1 % 2 !== 0;
    }
  }, [count1]);

  return (
    <div>
      <button onClick={AddCount1}>Count1 {count1}</button>
      <br />
      <span>{isOdd ? 'odd Number' : 'Even Number'}</span>
      <br />
      <button onClick={AddCount2}>Count2 {count2}</button>
    </div>
  );
};

export default Memo;
