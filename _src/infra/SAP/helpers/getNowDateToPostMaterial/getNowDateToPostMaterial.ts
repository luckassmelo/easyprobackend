
/**
 *Function responsible to post material SAP
 * @returns {string} - Date in format YYYYMMDD
 */
export function getNowDateToPostMaterial(): string {
  const now: Date = new Date();

  const year: number = now.getFullYear();
  const month: number = now.getMonth() + 1;
  const day: number = now.getDate();

  const formattedYear: string = year.toString();
  const formattedMonth: string = month.toString().padStart(2, '0');
  const formattedDay: string = day.toString().padStart(2, '0');

  const formattedDate: string = formattedYear + formattedMonth + formattedDay;

  return formattedDate;

}
