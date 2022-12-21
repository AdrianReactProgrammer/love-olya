import styles from "./Timer.module.css"
import { useEffect, useState } from 'react';

const Timer = ({ date }) => {
  const [finishTime] = useState(date.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) return // время вышло
    setDiff([
      Math.floor(diff / 86400), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60)
    ])
  }, [tick, finishTime])

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick])

  return (
    <div className={styles.timer}>
      <p>{`${diffDays} дней ${diffH.toString().padStart(2, '0')}:${diffM
      .toString()
      .padStart(2, '0')}:${diffS.toString().padStart(2, '0')}`}</p>
    </div>
    
  )
}

export default Timer