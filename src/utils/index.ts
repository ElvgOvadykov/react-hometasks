export function randomInt(min: number, max: number) {
  return min + Math.ceil(Math.random() * (max - min - 1));
}
