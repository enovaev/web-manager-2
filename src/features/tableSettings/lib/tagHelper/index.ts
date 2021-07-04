export const generateID = (ids: number[]): number => {
  const random = Math.floor(Math.random() * 1000);

  if (ids.includes(random)) return generateID(ids);
  return random;
};
