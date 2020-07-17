import { isMainThread } from "worker_threads";

export const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5);