const safeParse = (value) => {
  try {
    return JSON.parse(value) || [];
  } catch {
    return [];
  }
};

export const handleStoreRecentPlay = (username, eventId, name) => {
  const key = `${username}-recent-played`;
  const storedPlayed = localStorage.getItem(key);
  const recentPlayed = safeParse(storedPlayed);

  const filterOutOtherGame = recentPlayed.filter(
    (game) => game?.eventId !== eventId
  );

  const lastSort =
    filterOutOtherGame.length > 0
      ? filterOutOtherGame[filterOutOtherGame.length - 1]?.sort || 0
      : 0;

  const newGame = {
    name,
    eventId,
    sort: lastSort + 1,
  };

  const updated = [...filterOutOtherGame, newGame];

  localStorage.setItem(key, JSON.stringify(updated));
};
