import { format } from "../src/dateFormatter";

it('formats today as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it('formats a date that is not today as "DD/MM/YYYY"', () => {
  const December = 11;
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 16, 10, 5).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("16/12/2018");
});
