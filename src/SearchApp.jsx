import React, { useState } from "react";
import "./SearchApp.css";

const dummyData = `What exactly is this Worker thread module, and why do we need it? In this post, we will talk about the historical reasons concurrency is implemented in JavaScript and Node.js, the problems we might find, current solutions, and the future of parallel processing with Worker threads. Living in a single-threaded world JavaScript was conceived as a single-threaded programming language that ran in a browser. Being single-threaded means that only one set of instructions is executed at any time in the same process (the browser, in this case, or just the current tab in modern browsers). This made things easier for implementation and for developers using the language. JavaScript was initially a language only useful for adding some interaction to webpages, form validations, and so on — nothing that required the complexity of multithreading.`;

function SearchApp() {
  const [searched, setSearched] = useState("");
  const [text, setText] = useState(dummyData);

  const handleSearch = () => {
    if (searched !== "") {
      const re = new RegExp(searched, "g");
      const newText = dummyData.replace(re, `<mark>${searched}</mark>`);
      setText(newText);
    } else {
      setText(dummyData);
    }
  };

  const countHighlightedWords = () => {
    const markedText = document.createElement("div");
    markedText.innerHTML = text;
    const markedElements = markedText.querySelectorAll("mark");
    return markedElements.length;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <p>Number of highlighted words: {countHighlightedWords()}</p>
    </div>
  );
}

export default SearchApp;
