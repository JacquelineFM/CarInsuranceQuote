import { createContext } from "react";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  return <QuoteContext.Provider>{children}</QuoteContext.Provider>;
};

export { QuoteProvider };

export default QuoteContext;
