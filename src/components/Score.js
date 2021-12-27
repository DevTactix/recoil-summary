import { useRecoilValue } from "recoil";
import { gameScore, useResetScore } from "../recoil/atoms";

function Score() {
  const score = useRecoilValue(gameScore);
  const resetScore = useResetScore();

  return (
    <div>
      <h2>Score: {score} </h2>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}

export default Score;
