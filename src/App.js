import Timer from "./components/02-WhyILoveYou/Timer/Timer";
import styles from "./App.module.css"
import Navbar from "./components/01-Navbar/Navbar";
import WhyILoveYou from "./components/02-WhyILoveYou/WhyILoveYou";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HowILoveYou from './components/03-HowILoveYou/HowILoveYou';
import HowIFuckYou from './components/04-HowIFuckYou/HowIFuckYou';



const App = (props) => {
  return (
    <div className={styles.app} >
      <Timer date={new Date('Saturday, 31 Dec 2022 08:50:00')} />
      <Navbar />
      <Routes>
        <Route path="/WhyILoveYou" element={<WhyILoveYou />} />
        <Route path="/HowILoveYou" element={<HowILoveYou />} />
        <Route path="/HowIFuckYou" element={<HowIFuckYou />} />
      </Routes>
      <div className={styles.forever} >12.08.22 - навсегда</div>
    </div>
  )
}


export default App