import { useState, createContext } from "react";
import {
  getDifferenceYear,
  calculateBrand,
  calculatePlan,
  formatMoney,
} from "../helpers";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  /**
   * When the user types in the input field, the value of the input field is set to the value of the
   * state.
   */
  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * The function calculates the insurance quote based on the data provided by the user.
   */
  const quoteInsurance = () => {
    // Base
    let result = 2000;

    // Get difference by years
    const difference = getDifferenceYear(data.year);

    // Subtract 3% for each year
    result -= (difference * 3 * result) / 100;

    // European 30%
    // American 15%
    // Asian 5%
    result *= calculateBrand(data.brand);

    // Basic plan 20%
    // Complete plan 50%
    result *= calculatePlan(data.plan);

    // Format money
    result = formatMoney(result);

    setResult(result);
  };

  return (
    <QuoteContext.Provider
      value={{
        error,
        setError,
        result,
        data,
        handleChangeData,
        quoteInsurance,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };

export default QuoteContext;
