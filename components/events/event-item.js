import PropTypes from "prop-types";
import Link from "next/link";

const EventItem = ({ title, image, date, location, id, description }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <section className="container mx-auto p-10 md:p-20 antialiased ">
      <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-1">
        <img
          className="w-full md:w-52 object-cover"
          src={`/${image}`}
          alt={title}
        />
        <div className="">
          <div className="p-5 pb-10">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              {title}
            </h1>
            <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="bg-blue-50 p-5">
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="text-lg text-gray-700">
                  <time className="text-gray-900 font-bold">
                    {humanReadableDate}
                  </time>
                </div>
                <div className="text-lg text-gray-700">
                  <address className="text-gray-900 font-bold">
                    {formattedAddress}
                  </address>
                </div>
              </div>
              <Link href={exploreLink}>
                <button
                  type="button"
                  className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
                >
                  Explore Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventItem;
