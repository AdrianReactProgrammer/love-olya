import Timer from "./components/WhyILoveYou/Timer/Timer";
import styles from "./App.module.css"



const App = (props) => {
  return (
    <div className={styles.app} >
      <Timer date={new Date('Saturday, 31 Dec 2022 08:50:00')}/>
    </div>
  )
}


export default App