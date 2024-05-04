import React from "react";

export default function Input() {
  return (
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
          name="fbox"
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
        />
      </div>
    </div>
  );
}
