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
        {/* {diffDays === 6 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️______________❤️</span>
            ) : null}
            {diffH <= 23 ? (
              <span className={styles.meYou}>❤️_____________❤️</span>
            ) : null}
          </div>
        ) : null}
        {diffDays === 5 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️_____________❤️</span>
            ) : null}
            {diffH <= 23 ? (
              <span className={styles.meYou}>❤️____________❤️</span>
            ) : null}
          </div>
        ) : null}
        {diffDays === 4 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️____________❤️</span>
            ) : null}
            {diffH <= 23 ? (
              <span className={styles.meYou}>❤️___________❤️</span>
            ) : null}
          </div>
        ) : null}
        {diffDays === 3 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️___________❤️</span>
            ) : null}
            {diffH <= 23 ? (
              <span className={styles.meYou}>❤️__________❤️</span>
            ) : null}
          </div>
        ) : null}
        {diffDays === 2 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️__________❤️</span>
            ) : null}
            {diffH <= 23 ? (
              <span className={styles.meYou}>❤️_________❤️</span>
            ) : null}
          </div>
        ) : null}
        {diffDays === 1 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️_________❤️</span>
            ) : null}
            {diffH <= 23 ? (
              <span className={styles.meYou}>❤️________❤️</span>
            ) : null}
          </div>
        ) : null}
        {diffDays === 0 ? (
          <div>
            {diffH > 23 ? (
              <span className={styles.meYou}>❤️________❤️</span>
            ) : null}
            {diffH <= 23 && diffH > 5 ? (
              <span className={styles.meYou}>❤️_______❤️</span>
            ) : null}
            {diffH === 5 ? (
              <span className={styles.meYou}>❤️______❤️</span>
            ) : null}
            {diffH === 4 ? (
              <span className={styles.meYou}>❤️_____❤️</span>
            ) : null}
            {diffH === 3 ? (
              <span className={styles.meYou}>❤️____❤️</span>
            ) : null}
            {diffH === 2 ? <span className={styles.meYou}>❤️___❤️</span> : null}
            {diffH === 1 ? <span className={styles.meYou}>❤️__❤️</span> : null}
            {diffH === 0 ? <span className={styles.meYou}>❤️_❤️</span> : null}
            {diffH === 0 && diffM === 0 ? (
              <span className={styles.meYou}>❤️❤️</span>
            ) : null}
          </div>
        ) : null} */}
        {diffS === 60 || diffS === 45 || diffS === 30 || diffS === 15 ? <span className={styles.meYou}>❤️______________❤️</span> : null}
        {diffS === 59 || diffS === 44 || diffS === 29 || diffS === 14 ? <span className={styles.meYou}>❤️_____________❤️</span> : null}
        {diffS === 58 || diffS === 43 || diffS === 28 || diffS === 13 ? <span className={styles.meYou}>❤️____________❤️</span> : null}
        {diffS === 57 || diffS === 42 || diffS === 27 || diffS === 12 ? <span className={styles.meYou}>❤️___________❤️</span> : null}
        {diffS === 56 || diffS === 41 || diffS === 26 || diffS === 11 ? <span className={styles.meYou}>❤️__________❤️</span> : null}
        {diffS === 55 || diffS === 40 || diffS === 25 || diffS === 10 ? <span className={styles.meYou}>❤️_________❤️</span> : null}
         {diffS === 54 || diffS === 39 || diffS === 24 || diffS === 9 ? <span className={styles.meYou}>❤️________❤️</span> : null}
         {diffS === 53 || diffS === 38 || diffS === 23 || diffS === 8 ? <span className={styles.meYou}>❤️_______❤️</span> : null}
         {diffS === 52 || diffS === 37 || diffS === 22 || diffS === 7 ? <span className={styles.meYou}>❤️______❤️</span> : null}
         {diffS === 51 || diffS === 36 || diffS === 21 || diffS === 6 ? <span className={styles.meYou}>❤️_____❤️</span> : null}
         {diffS === 50 || diffS === 35 || diffS === 20 || diffS === 5 ? <span className={styles.meYou}>❤️____❤️</span> : null}
         {diffS === 49 || diffS === 34 || diffS === 19 || diffS === 4 ? <span className={styles.meYou}>❤️___❤️</span> : null}
         {diffS === 48 || diffS === 33 || diffS === 18 || diffS === 3 ? <span className={styles.meYou}>❤️__❤️</span> : null}
         {diffS === 47 || diffS === 32 || diffS === 17 || diffS === 2 ? <span className={styles.meYou}>❤️_❤️</span> : null}
         {diffS === 46 || diffS === 31 || diffS === 16 || diffS === 1 || diffS === 0 ? <span className={styles.meYou}>❤️❤️</span> : null}
      </div>
    </div>
  );
};

export default Timer;
