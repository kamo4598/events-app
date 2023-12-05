import PropTypes from "prop-types";
import EventItem from "./event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            location={event.location}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            description={event.description}
          />
        );
      })}
    </ul>
  );
};

EventList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default EventList;
