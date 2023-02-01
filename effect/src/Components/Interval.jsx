import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import '../App.css';

function Interval() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    </div>
  );
}
export default Interval;
