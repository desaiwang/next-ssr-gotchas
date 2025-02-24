"use client";
import React from "react";
import Spinner from "../Spinner";

function Counter() {
  const [count, setCount] = React.useState(null);

  //run upon mounting on client
  React.useEffect(() => {
    const savedValue = Number(window.localStorage.getItem("saved-count"));

    setCount(savedValue ? savedValue : 0);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {typeof count === "number" ? count : <Spinner />}
    </button>
  );
}

export default Counter;
