import { useMemo, useRef } from "react";
import useQuote from "../hooks/useQuote";
import { BRANDS, PLANS } from "../constants";

const Result = () => {
  const { result, data } = useQuote();
  const { brand, year, plan } = data;
  const yearRef = useRef(year);

  const [brandName] = useMemo(
    () => BRANDS.filter((brandTemp) => brandTemp.id === Number(brand)),
    [result]
  );
  const [planName] = useMemo(
    () => PLANS.filter((planTemp) => planTemp.id === Number(plan)),
    [result]
  );

  if (result === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow px-4 py-8 sm:px-10">
      <div className="bg-blue-600 shadow overflow-hidden">
        <div className="p-3">
          <h3 className="leading-6 font-bold text-white text-center uppercase">
            Overview
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-bold text-gray-400 uppercase">Brand</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {brandName.name}
              </dd>
            </div>
            <div className="bg-blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-bold text-gray-400 uppercase">Year</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {yearRef.current}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-bold text-gray-400 uppercase">Plan</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {planName.name}
              </dd>
            </div>
            <div className="bg-blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-bold text-gray-400 uppercase">Total:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {result}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Result;
