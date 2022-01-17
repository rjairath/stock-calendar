import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// const data = [
//   { day: 1, price: 100 },
//   { day: 2, price: 200 },
// ];
const data = {
  1: { price: 100 },
  2: { price: 200 },
};
const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (calDate) => {
    //TODO
    setDate(calDate);
  };

  const removeClicked = (date) => {
    console.log(date);
  };

  const addClicked = (date) => {
    console.log(date);
  };

  const setCalendar = (date) => {
    let dateVal = date.getDate();
    return data[dateVal] ? (
      <div className="calendar-date">
        <span className="price">{data[dateVal].price}</span>
        <span className="close" onClick={() => removeClicked(date)}>
          X
        </span>
      </div>
    ) : (
      <div className="calendar-add" onClick={() => addClicked(date)}>
        <span>Add</span>
      </div>
    );
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={({ date }) => setCalendar(date)}
      />
    </div>
  );
};

export default MyCalendar;
