import useQuote from "../hooks/useQuote";

const Error = () => {
  const { error } = useQuote();

  return (
    <div
      class="bg-red-100 border-red-600 text-red-600 border-l-4 p-3 mb-5"
      role="alert"
    >
      <p class="font-bold">Error</p>
      <p>{error}</p>
    </div>
  );
};

export default Error;
