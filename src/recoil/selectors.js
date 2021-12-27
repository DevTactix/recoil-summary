import { selector, selectorFamily } from "recoil";
import { gameScore } from "./atoms";

const EmojiTypes = {
  ToiletRoll: { id: 1, char: "🧻" },
  SnowMan: { id: 2, char: "⛄" },
};

const emoji = selectorFamily({
  key: "emoji",
  get:
    (emojiType = EmojiTypes.ToiletRoll.id) =>
    ({ get }) =>
      emojiType === EmojiTypes.ToiletRoll.id
        ? EmojiTypes.ToiletRoll.char
        : EmojiTypes.SnowMan.char,
});

const highScores = selector({
  key: "highScores",
  get: async ({ get }) => await fetchHighScores(),
});

const paperSize = selector({
  key: "paperSize",
  get: ({ get }) => 100 + get(gameScore) * 5,
});

async function fetchHighScores() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1337), 2000);
  });
}

export { EmojiTypes, emoji, highScores, paperSize };
