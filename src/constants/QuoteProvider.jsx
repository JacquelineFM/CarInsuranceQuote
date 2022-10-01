import { useState, createContext } from "react";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [error, setError] = useState("");
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

  return (
    <QuoteContext.Provider value={{ error, setError, data, handleChangeData }}>
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };

export default QuoteContext;
