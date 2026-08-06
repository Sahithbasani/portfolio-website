export function readingTime(words: number, wordsPerMinute = 220) {
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function canonical(path: string) {
  return new URL(path, "https://sahith.dev").toString();
}
