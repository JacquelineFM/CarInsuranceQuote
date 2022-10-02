import { useContext } from "react";
import QuoteContext from "../context/QuoteProvider";

/**
 * UseQuote() is a function that returns the useContext() function, which is passed the QuoteContext
 * object.
 * @returns The useContext hook is being used to return the QuoteContext.
 */
const useQuote = () => {
  return useContext(QuoteContext);
};

export default useQuote;
