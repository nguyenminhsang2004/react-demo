import React, { useEffect, useState } from "react";

const formatDate = (date) => {
  const h = `0${date.getHours()}`.slice(-2);
  const m = `0${date.getMinutes()}`.slice(-2);
  const s = `0${date.getSeconds()}`.slice(-2);
  return `${h}:${m}:${s}`;
};
function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clock = setInterval(() => {
      setTimeString(formatDate(new Date()));
    }, 1000);
    // Clean up
    return () => {
      clearInterval(clock);
    };
  }, []);

  return <h1>{timeString}</h1>;
}

export default Clock;
