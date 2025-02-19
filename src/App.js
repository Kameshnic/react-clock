import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      textAlign: "center",
      padding: "20px 40px",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "200px",
      minHeight: "100px",
    }}>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#282c34",
      color: "white",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <Clock />
    </div>
  );
}
