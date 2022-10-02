import Form from "./Form";
import Spinner from "./Spinner";
import Result from "./Result";
import useQuote from "../hooks/useQuote";

const AppInsurance = () => {
  const { loading } = useQuote();

  return (
    <>
      <header className="my-12">
        <h1 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
          Car Insurance <span className="text-blue-600">Quote</span>
        </h1>
      </header>
      <main className="sm:w-3/5 md:w-4/5 lg:w-3/5 sm:mx-auto mx-6 sm:overflow-hidden grid-cols-1 grid lg:grid-flow-col lg:auto-cols-auto gap-6">
        <div className="bg-white rounded-lg shadow px-4 py-8 sm:px-10">
          <Form />
        </div>
        {loading ? <Spinner /> : <Result />}
      </main>
    </>
  );
};

export default AppInsurance;
