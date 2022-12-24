import styles from "./Timer.module.css";
import { useEffect, useState } from "react";

const Timer = ({ date }) => {
  const [finishTime] = useState(date.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) return; // время вышло
    setDiff([
      Math.floor(diff / 86400), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <div className={styles.timer}>
      <span>Через</span>
      <p className={styles.timerP}>{`${diffDays} дней ${diffH
        .toString()
        .padStart(2, "0")}:${diffM.toString().padStart(2, "0")}:${diffS
        .toString()
        .padStart(2, "0")}`}</p>
      <span>я тебя поцелую!</span>
      <div className={styles.meYou}>
        {diffDays === 6 ? <div>
                   {diffH > 23 ? <div>🐵______________🐵</div> : null }{diffH <= 23 ? <div>🐵_____________🐵</div> : null }</div> : null}{diffDays === 5 ? <div>
                   {diffH > 23 ? <div>🐵_____________🐵</div> : null }{diffH <= 23 ? <div>🐵____________🐵</div> : null }</div> : null}{diffDays === 4 ? <div>
                   {diffH > 23 ? <div>🐵____________🐵</div> : null }{diffH <= 23 ? <div>🐵___________🐵</div> : null }</div> : null}{diffDays === 3 ? <div>
                   {diffH > 23 ? <div>🐵___________🐵</div> : null }{diffH <= 23 ? <div>🐵__________🐵</div> : null }</div> : null}{diffDays === 2 ? <div>
                   {diffH > 23 ? <div>🐵__________🐵</div> : null }{diffH <= 23 ? <div>🐵_________🐵</div> : null }</div> : null}{diffDays === 1 ? <div>
                   {diffH > 23 ? <div>🐵_________🐵</div> : null }{diffH <= 23 ? <div>🐵________🐵</div> : null }</div> : null}{diffDays === 0 ? <div>
                   {diffH > 23 ? <div>🐵________🐵</div> : null }{diffH <= 23 
                  && diffH > 5 ? <div>🐵_______🐵</div> : null }
                  {diffH === 5 ? <div>🐵______🐵</div> : null }
                  {diffH === 4 ? <div>🐵_____🐵</div> : null }
                  {diffH === 3 ? <div>🐵____🐵</div> : null }
                  {diffH === 2 ? <div>🐵___🐵</div> : null }
                  {diffH === 1 ? <div>🐵__🐵</div> : null }
                  {diffH === 0 ? <div>🐵_🐵</div> : null }
   {diffH === 0 && diffM === 0 ? <div>🐵🐵</div> : null }
        </div> : null}
      </div>
    </div>
  );
};

export default Timer;
