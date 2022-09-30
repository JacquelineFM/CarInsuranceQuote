import Form from "./Form";

const AppInsurance = () => {
  return (
    <>
      <header className="my-12">
        <h1 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
          Car Insurance <span className="text-blue-600">Quote</span>
        </h1>
      </header>
      <main className="bg-white rounded-lg shadow sm:w-2/5 md:w-4/5 lg:w-2/5 sm:mx-auto mx-6 sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <Form />
        </div>
      </main>
    </>
  );
};

export default AppInsurance;
