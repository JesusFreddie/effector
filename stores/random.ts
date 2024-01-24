import { createEvent, createStore } from "effector";

export const plasRandom = createEvent();
export const minusRandom = createEvent();
export const random = createEvent();

export const $random = createStore<number>(0);

$random
  .on(plasRandom, (start) => start + 1)
  .on(minusRandom, (start) => start - 1)
  .on(
    random,
    (state) => (state = Math.floor(Math.random() * (100 - -100) + -100))
  );
