function getUniqueYearsFromGames(games) {
  const years = games
    .map(g => g.get('acquisitiondate'))
    .filter(notNull => notNull)
    .map(fullDate => fullDate.substring(0, 4));
  const uniqueYears = [...new Set(years)];
  return uniqueYears
    .map(yearString => parseInt(yearString))
    .sort((a, b) => a - b );
}

export {
  getUniqueYearsFromGames,
};