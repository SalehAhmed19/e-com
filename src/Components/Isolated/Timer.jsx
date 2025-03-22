import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(2300000); // 120 seconds countdown

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Convert timeLeft into minutes and seconds
  // Convert timeLeft into days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-[#F8F8FB] px-3 py-2 rounded-sm">
      <p>
        <span className="font-bold">{String(days).padStart(2, "0")}</span> Days
        :<span className="font-bold"> {String(hours).padStart(2, "0")} </span>:
        <span className="font-bold"> {String(minutes).padStart(2, "0")} </span>{" "}
        : <span className="font-bold">{String(seconds).padStart(2, "0")}</span>
      </p>
    </div>
  );
}

export default Timer;
