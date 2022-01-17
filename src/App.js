import "./App.css";
import Calendar from "./components/Calendar";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="root-container">
      <div className="calendar-block">
        <Calendar />
      </div>
      <div style={{ width: "40%" }}>
        <SidePanel />
      </div>
    </div>
  );
}

export default App;
