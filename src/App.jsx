import { QuoteProvider } from "./context/QuoteProvider";
import AppInsurance from "./components/AppInsurance";

const App = () => {
  return (
    <QuoteProvider>
      <AppInsurance />
    </QuoteProvider>
  );
};

export default App;
