import { useRecoilValue } from "recoil";
import { highScores } from "../recoil/selectors";

function HighScores() {
  return <div>{useRecoilValue(highScores)}</div>;
}

export default HighScores;
