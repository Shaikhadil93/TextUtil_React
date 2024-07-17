import React, { useState } from "react";

export default function TextForm(props) {
  //fuction for upper case
  const handleUpClick = () => {
    console.log("up clicked!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  //fuction for lower case
  const handleLoClick = () => {
    console.log("Lo clicked!");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  //fuction for clear text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  //fuction for copied to clipbord
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  //fuction for removoe extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  //handeling on changed events
  const handleOnChange = (event) => {
    console.log("on change clicked!");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#041931" }}
    >
      <div className="mb-3">
        <h2 className="my-2">{props.heading} </h2>
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#041931",
          }}
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
          className="btn btn-primary mx-1 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#041931" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Wrods and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minuts read
        </p>
        <h2>Priview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter somthing in the text box to preview it here"}
        </p>
      </div>
    </div>
  );
}
