import React from "react";

const SidePanel = ({ maxProfit }) => {
  return (
    <div className="bold">
      <p>Max Profit: {maxProfit.maxProfit}</p>
      <p>Buy on: {maxProfit.minDate}</p>
      <p>Sell on: {maxProfit.maxDate}</p>
    </div>
  );
};

export default SidePanel;
