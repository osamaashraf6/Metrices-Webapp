const filterData = (data) => data.map((item) => ({
  symbol: item.symbol,
  calendarYear: item.calendarYear,
  grossProfitRatio: item.grossProfitRatio,
  netIncomeRatio: item.netIncomeRatio,
  link: item.link,
}));

export const grossData = (data) => {
  const result = [];
  data.map((item) => result.push(item.grossProfitRatio));
  return result.reverse();
};

export const netIncomeData = (data) => {
  const result = [];
  data.map((item) => result.push(item.netIncomeRatio));
  return result.reverse();
};

export default filterData;
