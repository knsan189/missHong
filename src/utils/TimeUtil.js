export function getFormattedDate(date) {
  const stringDate = date.toString();
  const year = stringDate.substr(0, 4);
  const month = stringDate.substr(4, 2);
  const day = stringDate.substr(6, 2);
  return `${year}. ${month}. ${day}`;
}
