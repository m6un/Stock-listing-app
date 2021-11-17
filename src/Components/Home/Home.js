import React, { useState, useEffect } from "react";

import "./Home.css";
import Fuse from "fuse.js";
import axios from "../../axios";
import Table from "../Table/Table";
const csv = require("csvtojson");

function Home() {
  const [stocks, setStocks] = useState();
  const [searchData, setSearchData] = useState(stocks);

  //extracting instruments data
  useEffect(() => {
    axios.get("instruments").then((response) => {
      csv()
        .fromString(response.data)
        .then((jsonObj) => setStocks(jsonObj));
    });
  }, []);

  //functionality for fuzzy search
  const searchItem = (query) => {
    if (!query) {
      setSearchData(stocks);
      return;
    }
    const fuse = new Fuse(stocks, {
      keys: ["Name", "Symbol"],
    });
    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      setSearchData(finalResult);
    } else {
      setSearchData([]);
    }
  };
  return (
    <div>
      <div className="box">
        <input
          type="search"
          onChange={(e) => searchItem(e.target.value)}
          placeholder="Search"
        />
      </div>

      <Table stocks={searchData ? searchData : stocks} />
    </div>
  );
}
export default Home;
