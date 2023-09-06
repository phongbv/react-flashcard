import React from 'react';
import './App.css';
import Flashcard from "./components/Flashcard/Flashcard";
import FlashcardArray from "./components/FlashcardArray/FlashcardArray";
import FlashcardArrayProps from "./interfaces/IFlashcardArray";

function App() {
    
  return (
    <div className="App">
      <header className="App-header">
          {/*<Flashcard*/}
          {/*    frontHTML="<h1>Front</h1>"*/}
          {/*    backHTML="<h1>Back</h1>"*/}
          {/*/>*/}
          {/*<FlashcardArray cards={[]}/>*/}
          <FlashcardArray cards={[
              {
                  id: 1,
                  frontHTML: "<h1>First item</h1>",
                  backHTML: "<h1>Back</h1>"
              }
          ]}/>
      </header>
    </div>
  );
}

export default App;
