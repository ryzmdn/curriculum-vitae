export function formatDate(dateString: string): string {
  const [day, month, year] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export const formatYear = (dateString: string): number => {
  const [, , year] = dateString.split("-").map(Number);
  return year;
};

export function getEndYear(to: string): string {
  const currentYear = new Date().getFullYear();
  const endYear = formatYear(to);
  return endYear > currentYear ? "Present" : endYear.toString();
}
