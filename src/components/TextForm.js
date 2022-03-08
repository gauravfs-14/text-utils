import React, { useState } from "react";

function TextForm(props) {
  function toUpCase() {
    let newText = text.toUpperCase();
    setText(newText);
    document.title = "Text Converted to Upper Case";
  }

  function toLowCase() {
    let newText = text.toLowerCase();
    setText(newText);
    document.title = "Text Converted to Lower Case";
  }

  function copyText() {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.title = "Text Copied to Clipboard";
  }
  function clearText() {
    setText("");
    document.title = "Text Cleared";
  }
  function textChange(event) {
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Enter your text here</label>
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "bark" : "light"
            } bg-${props.mode}`}
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={textChange}
          ></textarea>
        </div>
      </form>
      <button className="btn btn-primary" onClick={toUpCase}>
        UpperCase
      </button>
      <button className="btn btn-primary ml-2" onClick={toLowCase}>
        LowerCase
      </button>
      <button className="btn btn-primary ml-2" onClick={copyText}>
        Copy Text
      </button>
      <button className="btn btn-primary ml-2" onClick={clearText}>
        Clear Text
      </button>

      <div className="container my-3">
        <h1>Text Details</h1>
        <p>Characters: {text.length}</p>
        <p>
          Words:{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>Sentences: {text.split(".").length - 1}</p>
      </div>
    </>
  );
}

export default TextForm;
