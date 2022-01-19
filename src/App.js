import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import SidePanel from "./components/SidePanel";

function App() {
  const [maxProfitResult, setMaxProfitResult] = useState({});
  return (
    <div className="root-container">
      <div className="header-block">
        <h1>The Stock Watcher</h1>
      </div>
      <div className="calendar-block">
        <Calendar setMaxProfitResult={setMaxProfitResult} />
      </div>
      <div className="sidepanel-block">
        <SidePanel maxProfit={maxProfitResult} />
      </div>
    </div>
  );
}

export default App;
