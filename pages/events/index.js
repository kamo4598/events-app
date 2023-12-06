import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import Link from "next/link";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const searchEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <div className="m-4">
        <Link href="/">
          <button
            type="button"
            className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
          >
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <EventsSearch onSearch={searchEvents} />
        <EventList items={allEvents} />
      </div>
    </>
  );
};

export default AllEventsPage;
