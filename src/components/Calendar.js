import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const data = [
  { date: "01/01/2022", price: 100 },
  { date: "02/01/2022", price: 200 },
];

const MyCalendar = ({ setMaxProfitResult }) => {
  const [date, setDate] = useState(new Date());
  const [stockData, setStockData] = useState(data);
  const [stockDataObj, setStockDataObj] = useState({});
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [addedPrice, setAddedPrice] = useState(0);

  useEffect(() => {
    let obj = {};
    stockData.forEach((stock) => {
      obj[stock.date] = stock.price;
    });
    setStockDataObj(obj);

    // Compute max profit
    computeMaxProfit();
  }, [stockData]);

  const onChange = (calDate) => {
    setDate(calDate);
  };

  const computeMaxProfit = () => {
    let arr = [...stockData];
    console.log(arr);
    let minValue = Number.MAX_SAFE_INTEGER,
      minDate = "";
    let maxProfit = 0,
      maxDate = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].price < minValue) {
        minValue = arr[i].price;
        minDate = arr[i].date;
      } else if (arr[i].price - minValue > maxProfit) {
        maxProfit = arr[i].price - minValue;
        maxDate = arr[i].date;
      }
    }
    maxProfit = maxProfit * 10;
    console.log(maxProfit, minDate, maxDate);
    setMaxProfitResult({ maxProfit, minDate, maxDate });
  };

  const removeClicked = (date) => {
    let dateStr = date.toLocaleDateString();
    setStockData(stockData.filter((item) => item.date != dateStr));
  };

  const addClicked = (date) => {
    let dateStr = date.toLocaleDateString();
    setSelectedDate(dateStr);
    toggle();
    // let newObj = { date: dateStr, price: 1000 };
    // setStockData([...stockData, newObj]);
  };

  const addConfirmed = () => {
    if (addedPrice) {
      let newObj = { date: selectedDate, price: addedPrice };
      setStockData([...stockData, newObj]);
    }
    toggle();
  };

  const setCalendar = (date) => {
    let dateVal = date.toLocaleDateString();
    return stockDataObj[dateVal] ? (
      <div className="calendar-date">
        <span className="price">{stockDataObj[dateVal]}</span>
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

  const toggle = () => setModalOpened(!modalOpened);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={({ date }) => setCalendar(date)}
        minDetail="month"
      />

      <Modal isOpen={modalOpened} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Price for {selectedDate}</ModalHeader>

        <ModalBody>
          <input
            type="number"
            value={addedPrice}
            onChange={(e) => setAddedPrice(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => addConfirmed()}>
            Add
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyCalendar;
