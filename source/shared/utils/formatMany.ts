export const formatMany = (count: number | undefined, price: number): string => {
  let n = count ? count * price : "0";
  n = n.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
};
export const formatManyofFull = (full: number): string => {
  let n = (full / 100).toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
};
