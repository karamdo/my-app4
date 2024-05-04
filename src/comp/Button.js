import React, { useState } from "react";
import Data from "./data";

export default function Button() {
  let [res, setRes] = useState({
    toptxt: "",
    btmtxt: "",
    url: "",
  });
  const clickh = () => {
    const ran = Math.floor(Math.random() * 3);
    console.log(ran);
    setRes((old) => {
      return {
        ...old,
        url: Data[ran].url,
      };
    });
  };
  return (
    <div className="btn">
      <button className="btntxt" onClick={clickh}>
        Get a new meme image 🖼
      </button>
      {res.url && <img src={res.url} alt="dd" className="btnimg" />}
    </div>
  );
}
