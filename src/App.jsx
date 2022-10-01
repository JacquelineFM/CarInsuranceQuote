import { QuoteProvider } from "./constants/QuoteProvider";
import AppInsurance from "./components/AppInsurance";

const App = () => {
  return (
    <QuoteProvider>
      <AppInsurance />
    </QuoteProvider>
  );
};

export default App;
