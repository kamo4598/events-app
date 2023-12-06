import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import Link from "next/link";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <EventList items={featuredEvents} />
      <div className="w-1/2">
        <Link href="/events">
          <button
            type="button"
            className="w-full mt-3 mb-5 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
          >
            All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
