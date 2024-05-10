import React, { useState } from "react";

export default function Button() {
  let [meme, setMeme] = useState({});
  let [res, setRes] = useState({
    toptxt: "",
    btmtxt: "",
    url: "",
    bo: false,
  });
  function dodis(event) {
    const { name, value } = event.target;
    setRes(() => {
      return {
        ...res,
        [name]: value,
      };
    });
  }
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMeme(data.data.memes));
  }, []);
  const clickh = () => {
    const ran = Math.floor(Math.random() * 100);
    setRes((old) => {
      return {
        ...old,
        bo: true,
        url: meme[ran].url,
      };
    });
  };
  return (
    <div>
      <div className="input">
        <div className="finput">
          <label className="flabel" htmlFor="fbox">
            Top text :
          </label>
          <input
            type="text"
            className="fbox"
            id="fbox"
            placeholder="Shut up"
            name="toptxt"
            onChange={dodis}
            value={res.toptxt}
          />
        </div>
        <div className="sinput">
          <label className="slabel" htmlFor="sbox">
            Bottom text :
          </label>
          <input
            type="text"
            className="sbox"
            id="sbox"
            placeholder="And take my money"
            name="btmtxt"
            onChange={dodis}
            value={res.btmtxt}
          />
        </div>
      </div>
      <div className="btn">
        <button className="btntxt" onClick={clickh}>
          Get a new meme image 🖼
        </button>
        <div className="img">
          {res.url && <img src={res.url} alt="dd" className="btnimg" />}
          {res.bo && <h1 className="fh">{res.toptxt}</h1>}
          {res.bo && <h1 className="sh">{res.btmtxt}</h1>}
        </div>
      </div>
    </div>
  );
}
