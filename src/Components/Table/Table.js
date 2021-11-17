import React from "react";
import { useHistory, generatePath } from "react-router-dom";
import "./Table.css";

function Table({ stocks }) {
  const history = useHistory();

  //handleProceed functionality for symbol - click
  const handleProceed = (obj) => {
    let symbol = obj.Symbol;
    symbol && history.push(generatePath("/stocks/:symbol", { symbol }));
  };

  //populating table
  return (
    <div className="main">
      <div className="tableHeader">
        <h3>Symbol</h3>
        <h3>Name</h3>
        <h3>Sector</h3>
        <h3>Valid till</h3>
      </div>
      <div className="child">
        {stocks &&
          stocks.map((obj, i) => (
            <div className="eachRow">
              <div
                className="text1"
                key={i}
                onClick={() => {
                  handleProceed(obj);
                }}
              >
                {obj.Symbol}
              </div>
              <div className="text">{obj.Name}</div>
              <div className="text">{obj.Sector}</div>
              <div className="text">{obj.Validtill}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Table;
