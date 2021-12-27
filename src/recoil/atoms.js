import { atom, useRecoilState } from "recoil";

const gameScore = atom({
  key: "gameScore",
  default: 0,
});

const useResetScore = () => {
  const [, setScore] = useRecoilState(gameScore);
  return () => setScore(0);
};
export { gameScore, useResetScore };
