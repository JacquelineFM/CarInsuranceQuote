/**
 * It returns the difference between the current year and the year passed in as an argument.
 * @param year - The year of the car
 * @returns The difference between the current year and the year passed in.
 */
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

/**
 * It takes a number as an argument and returns a number.
 * @param brand - 1, 2, 3
 * @returns the value of the increment variable.
 */
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "1":
      increment = 1.3;
      break;
    case "2":
      increment = 1.15;
      break;
    case "3":
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}

/**
 * It returns 1.2 if the plan is 1, otherwise it returns 1.5
 * @param plan - The plan the user has selected.
 * @returns A function that takes a plan and returns a number.
 */
export function calculatePlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

/**
 * It takes a number and returns a string formatted as US currency.
 * @param quantity - The number to be formatted.
 * @returns A function that takes a quantity and returns a string.
 */
export function formatMoney(quantity) {
  return quantity.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
