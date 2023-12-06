import { useRef } from "react";
import PropTypes from "prop-types";

const EventsSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className="mt-4 w-1/2" onSubmit={submitHandler}>
      <div className="flex items-center justify-center">
        <label htmlFor="yearFilter" className="text-gray-900 font-bold mr-4">
          Year
        </label>
        <select
          ref={yearInputRef}
          id="yearFilter"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 mr-4"
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <label htmlFor="monthFilter" className="text-gray-900 font-bold mr-4">
          Month
        </label>
        <select
          ref={monthInputRef}
          id="monthFilter"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 mr-4"
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <button
          type="submit"
          className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
        >
          Search
        </button>
      </div>
    </form>
  );
};

EventsSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default EventsSearch;
