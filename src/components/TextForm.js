import React, { useState } from "react";

export default function TextForm(props) {
  //fuction for upper case
  const handleUpClick = () => {
    console.log("up clicked!");
    let newText = text.toUpperCase();
    setText(newText);
  };

  //fuction for lower case
  const handleLoClick = () => {
    console.log("Lo clicked!");
    let newText = text.toLowerCase();
    setText(newText);
  };

  //fuction for clear text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  //fuction for copied to clipbord
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  //fuction for removoe extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //handeling on changed events
  const handleOnChange = (event) => {
    console.log("on change clicked!");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading} </h1>
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>
          convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
}
