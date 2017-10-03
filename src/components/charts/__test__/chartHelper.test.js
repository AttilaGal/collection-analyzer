import immutable from 'immutable';
import { getUniqueYearsFromGames } from '../chartHelper';
import { testData } from './mappedgames_test_data';

describe('chartHelper', () => {
  test('it should contain 3 years', () => {
    const games = immutable.fromJS(testData);
    const years = getUniqueYearsFromGames(games);
    expect(years.length).toBe(3);
  });

  test('it should contain the years in order', () => {
    const games = immutable.fromJS(testData);
    const years = getUniqueYearsFromGames(games);
    expect(years[0]).toBe(2013);
    expect(years[1]).toBe(2016);
    expect(years[2]).toBe(2017);
  });
});
