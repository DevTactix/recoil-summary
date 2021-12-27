import { useRecoilState, useRecoilValue } from "recoil";
import { gameScore } from "../recoil/atoms";
import { EmojiTypes, emoji, paperSize } from "../recoil/selectors";

function Game() {
  const [score, setScore] = useRecoilState(gameScore);
  const size = useRecoilValue(paperSize);
  const emojiGfx = useRecoilValue(emoji(EmojiTypes.SnowMan.id));

  const onRollClick = () => setScore(score + 1);

  return (
    <div>
      <button
        style={{
          fontSize: size,
          cursor: "pointer",
          background: "transparent",
          border: 0,
        }}
        onClick={onRollClick}
      >
        {emojiGfx}
      </button>
    </div>
  );
}

export default Game;
