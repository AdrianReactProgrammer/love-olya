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
      <div>
        {diffDays === 6 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️______________❤️</span> : null }{diffH <= 23 ? <span className={styles.meYou}>❤️_____________❤️</span> : null }</div> : null}{diffDays === 5 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️_____________❤️</span> : null }{diffH <= 23 ? <span className={styles.meYou}>❤️____________❤️</span> : null }</div> : null}{diffDays === 4 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️____________❤️</span> : null }{diffH <= 23 ? <span className={styles.meYou}>❤️___________❤️</span> : null }</div> : null}{diffDays === 3 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️___________❤️</span> : null }{diffH <= 23 ? <span className={styles.meYou}>❤️__________❤️</span> : null }</div> : null}{diffDays === 2 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️__________❤️</span> : null }{diffH <= 23 ? <span className={styles.meYou}>❤️_________❤️</span> : null }</div> : null}{diffDays === 1 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️_________❤️</span> : null }{diffH <= 23 ? <span className={styles.meYou}>❤️________❤️</span> : null }</div> : null}{diffDays === 0 ? <div>
                   {diffH > 23 ? <span className={styles.meYou}>❤️________❤️</span> : null }{diffH <= 23 
                  && diffH > 5 ? <span className={styles.meYou}>❤️_______❤️</span> : null }
                  {diffH === 5 ? <span className={styles.meYou}>❤️______❤️</span> : null }
                  {diffH === 4 ? <span className={styles.meYou}>❤️_____❤️</span> : null }
                  {diffH === 3 ? <span className={styles.meYou}>❤️____❤️</span> : null }
                  {diffH === 2 ? <span className={styles.meYou}>❤️___❤️</span> : null }
                  {diffH === 1 ? <span className={styles.meYou}>❤️__❤️</span> : null }
                  {diffH === 0 ? <span className={styles.meYou}>❤️_❤️</span> : null }
   {diffH === 0 && diffM === 0 ? <span className={styles.meYou}>❤️❤️</span> : null }
        </div> : null}
      </div>
    </div>
  );
};

export default Timer;
