/* Getting the current year. */
const YEARMAX = new Date().getFullYear();

export const BRANDS = [
  { id: 1, name: "European" },
  { id: 2, name: "American" },
  { id: 3, name: "Asian" },
];

/* Creating an array of 20 years starting from the current year. */
export const YEARS = Array.from(new Array(20), (value, idx) => YEARMAX - idx);

export const PLANS = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Complete" },
];
