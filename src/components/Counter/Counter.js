"use client";
import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  //run upon mounting on client
  React.useEffect(() => {
    const savedValue = Number(window.localStorage.getItem("saved-count"));

    if (!savedValue) {
      //this catches both null and 0
      return;
    }

    setCount(Number(savedValue));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
