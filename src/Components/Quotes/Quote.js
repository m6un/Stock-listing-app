import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router";
import axios from "../../axios";
import "./Quote.css";

function Quote() {
  const [qoutes, setQoutes] = useState();
  const symbol = useParams();

  //ascending functionality
  function sortByAscending() {
    let sortedAscending = [...qoutes].sort((a, b) => {
      return new moment(a.time) - new moment(b.time);
    });

    setQoutes([...sortedAscending]);
  }

  //descending functionality
  function sortByDescending(qoutes) {
    let sortedDescending = [...qoutes].sort((a, b) => {
      return new moment(b.time) - new moment(a.time);
    });
    setQoutes([...sortedDescending]);
    console.log(...qoutes);
  }

  //extracting qoutes data
  useEffect(() => {
    axios.get(`quotes/${symbol.symbol}`).then((response) => {
      setQoutes(Object.values(response.data.payload)[0]);
    });
  }, []);

  //   console.log(symbol.symbol);
  // reload functionality
  window.setTimeout(function () {
    window.location.reload();
  }, 180000);

  return (
    <div>
      <div className="header">
        <h3 style={{ marginBottom: "15px" }}>{symbol.symbol}</h3>
        <button className="sortButton" onClick={(e) => sortByAscending()}>
          asc
        </button>
        <button
          className="sortButton"
          onClick={(e) => sortByDescending(qoutes)}
        >
          desc
        </button>
      </div>

      <div className="main">
        <div className="tableHeader">
          <h3>Time</h3>
          <h3>Price</h3>
          <h3>Valid till</h3>
        </div>
        <div className="child">
          {qoutes &&
            qoutes.map((obj, i) => (
              <div className="eachRow">
                <div className="text" key={i}>
                  {obj.time}
                </div>
                <div className="text">{obj.price}</div>
                <div className="text">{obj.valid_till}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Quote;
