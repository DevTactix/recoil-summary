import { useRecoilValue } from "recoil";
import { gameScore } from "../recoil/atoms";

function Gems() {
  const score = useRecoilValue(gameScore);
  return (
    <div>
      {[...Array(score)].map((n, i) => (
        <span key={i} role="img" aria-label="gem">
          💎
        </span>
      ))}
    </div>
  );
}

export default Gems;
