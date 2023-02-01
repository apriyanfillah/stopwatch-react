import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

function formatTime(second) {
  const minute = Math.floor(second/60);
  second = second % 60;

  return (minute + '').padStart(2, '0') + ':' + (second + '').padStart(2, '0');
}

function App() {
  const [second, setSecond] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!play) return;

    const interval = setInterval(() => {
      setSecond((previousSecond) => previousSecond + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [play]);

  const _onReset = useCallback(() => {
    setSecond(0);
  }, []);

  const _onToggle = useCallback(() => {
    setPlay(previousPlay => !previousPlay);
  }, []);

  return (
    <div className="App">
    <h1>{formatTime(second)}</h1>
      <button onClick={_onToggle}>{ !play ? "Start" : "Stop" }</button>
      <button onClick={_onReset}>Reset</button>
    </div>
  );
}

export default App;
