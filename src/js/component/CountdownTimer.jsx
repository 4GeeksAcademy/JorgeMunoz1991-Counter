import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      alert(`Se alcanzó el tiempo especificado: ${targetTime} segundos`);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, time, targetTime]);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setTime(targetTime);
  };

  const handleInputChange = (event) => {
    const inputTime = parseInt(event.target.value, 10);
    setTime(inputTime);
    setTargetTime(inputTime);
  };

  return (
    <div className="countdown-timer">
      <h2>Cuenta regresiva: {time}</h2>
      <input type="number" value={targetTime} onChange={handleInputChange} />
      <div className="container">
      <button onClick={startCountdown}>Iniciar</button>
      <button onClick={stopCountdown}>Detener</button>
      <button onClick={resetCountdown}>Reiniciar</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
