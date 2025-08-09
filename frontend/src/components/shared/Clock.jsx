// src/components/Clock.jsx
"use client";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", {
      hour12: false, // 24-hour format
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="text-sm font-mono text-neutral-500 bg-transparent px-2 py-1 ">
      {formatTime(time)}
    </div>
  );
};

export default Clock;
