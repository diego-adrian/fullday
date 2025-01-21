import dayjs from 'dayjs';

/**
 * 
 * @param {*} date 
 * @param {*} format 
 * @returns date formatted
 */
export function formatDate(date: string | Date, format = 'YYYY-MM-DD') {
  return dayjs(date).format(format);
}

/**
 * 
 * @param {*} date 
 * @returns boolean if the date is a weekend
 */
export function isWeekend(date: string | Date) {
  return dayjs(date).day() === 6 || dayjs(date).day() === 0;
}

/**
 * 
 * @param {*} date 
 * @returns boolean if the date is valid
 */
export function isValidDate(date: string | Date) {
  return dayjs(date).isValid();
}

export {
  dayjs
};
