import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import Link from "next/link";
import EventList from "../../components/events/event-list";
const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return (
      <>
        <div className="m-4">
          <Link href="/events">
            <button
              type="button"
              className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="text-3xl flex flex-col items-center justify-center w-full h-[90vh]">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  const year = filteredData[0];
  const month = filteredData[1];
  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <div className="m-4">
          <Link href="/events">
            <button
              type="button"
              className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="text-3xl flex flex-col items-center justify-center w-full h-[90vh]">
          <p>Invalid Filter. Please adjust your values!</p>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <div className="m-4">
          <Link href="/events">
            <button
              type="button"
              className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="text-3xl flex flex-col items-center justify-center w-full h-[90vh]">
          <p>No events found for the chosen filter!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="m-4">
        <Link href="/events">
          <button
            type="button"
            className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
          >
            Back
          </button>
        </Link>
      </div>
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
