import React, { useState } from "react";
import "./styles.css";

const emojipedia = {
  "😂": "smiling face with tears of joy",
  "🤣": "rolling on the Floor Laughing",
  "😍": "smiling face with heart eyes",
  "🖤": "black heart",
  "❤": "Red Heart",
  "💔": "broken Heart",
  "👌": "kaimm",
  "😅": "Grinning Face with Sweat",
  "🤩": "Star Struck",
  "🐼": "panda face",
  "😘": "face blowing a kiss",
  "💋": "kiss mark",
  "😜": "smirking face with Toungue",
  "🤪": "nazy Face",
  "😭": "loudly crying face",
  "😎": "handsome face with goggles"
};
var emojiArray = Object.keys(emojipedia);

export default function App() {
  const [emojiValue, setEmojiValue] = useState(null);
  function emojiInputHandler(inputEl) {
    var meaning = emojipedia[inputEl.target.value];
    if (meaning === undefined) {
      if (meaning === "") {
        meaning = null;
      } else {
        meaning =
          "sorry we don't have this in our Database. please try some other emoji";
      }
    }
    setEmojiValue(meaning);
  }

  function listItemClickHandler(emoji) {
    var meaning = emojipedia[emoji];
    setEmojiValue(meaning);
  }

  return (
    <div className="App">
      <h1>
        Know <span style={{ color: "teal", fontSize: "1.2em" }}>emoji's</span>{" "}
        better
      </h1>
      <input
      placeholder="enter any emoji to find its meaning"
        onChange={emojiInputHandler}
        style={{ marginBottom: "30px" }}
      ></input>
      <div className="container"> meaning:-
      <h1 className="showMeaning display-4" > {emojiValue}
      </h1>
      </div>
      <h2> emoji's we have</h2>
      <div className="showAllEmoji">
        {emojiArray.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => listItemClickHandler(emoji)}
              style={{
                padding: "1rem",
                fontSize: "2.3rem",
                cursor: "pointer",
                marginBottom: "20px!important"
              }}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}