import { BRANDS, YEARS, PLANS } from "../constants";

const Form = () => {
  return (
    <form>
      <div className="mb-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
          Brand
        </label>
        <select
          name="brand"
          className="block w-full p-3 bg-white border border-gray-300 focus:ring-blue-600 focus:ring-1 focus:border-blue-600"
        >
          <option value="">-- Select brand --</option>
          {BRANDS.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
          Year
        </label>
        <select
          name="year"
          className="block w-full p-3 bg-white border border-gray-300 focus:ring-blue-600 focus:ring-1 focus:border-blue-600"
        >
          <option value="">-- Select year --</option>
          {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
          Plan
        </label>
        <ul className="items-center w-full bg-white border border-gray-300 sm:flex">
          {PLANS.map((plan) => (
            <li
              key={plan.id}
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r"
            >
              <div className="flex items-center pl-3">
                <input id={plan.id} type="radio" value={plan.id} name="plan" />
                <label htmlFor={plan.id} className="p-3 w-full">
                  {plan.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="submit"
        className="mt-5 p-3 uppercase font-bold w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white cursor-pointer"
        value="Quote"
      />
    </form>
  );
};

export default Form;
