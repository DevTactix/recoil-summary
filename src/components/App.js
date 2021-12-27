import { Suspense } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Game from "./Game";
import HighScores from "./HighScores";
import Score from "./Score";
import Gems from "./Gems";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Click-a-Mania</h1>
        <Suspense
          fallback={
            <div style={{ fontStyle: "italic", fontVariant: "small-caps" }}>
              Loading...
            </div>
          }
        >
          <HighScores />
        </Suspense>
        <Game />
        <Gems />
        <Score />
      </div>
    </RecoilRoot>
  );
}

export default App;
