export const useDateSort = <T extends { meta: { date: string } }>(
  data: T[],
) => {
  const parseDate = (dateString: string) => {
    const years = dateString.match(/\d{4}/g)?.map(Number) ?? [0];
    const startYear = years[0];
    const endYear = years.length > 1 ? years[years.length - 1] : startYear;
    return { startYear, endYear };
  };

  return [...data].sort((a, b) => {
    const dateA = parseDate(a.meta.date);
    const dateB = parseDate(b.meta.date);
    if (dateB.endYear !== dateA.endYear) return dateB.endYear - dateA.endYear;
    return dateB.startYear - dateA.startYear;
  });
};
