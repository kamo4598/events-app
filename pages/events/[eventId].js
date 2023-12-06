import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import Link from "next/link";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

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
      <div className="flex items-center justify-center h-[80vh]">
        <div className="flex items-center justify-center border-4 border-gray-800 max-w-4xl">
          <div className="m-4 w-1/2">
            <img
              className="w-full h-96 object-cover"
              src={`/${event.image}`}
              alt={event.title}
            />
          </div>
          <div className="flex flex-col items-center justify-start m-4 w-1/2">
            <div className="hidden sm:flex w-full mb-4 text-xl lg:text-2xl pt-3 lg:pt-0">
              <p>{event.title}</p>
            </div>
            <div className="description w-full">
              <p className="text-base lg:text-lg">Description</p>
              <p className="py-2 text-gray-500 text-xs lg:text-base">
                {event.description}
              </p>
              <p className="pb-4 lg:pb-8 text-gray-500 text-xs lg:text-base">
                {event.date}
              </p>
              <p className="pb-4 lg:pb-8 text-gray-500 text-xs lg:text-base">
                {event.location}
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailPage;
