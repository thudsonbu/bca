import Jumbotron from "../components/jumbotron/jumbotron";
import GroupTitle from "../components/group-title/group-title";
import EventCard from "../components/event-card/event-card";
import CardGrid from "../components/card-grid/card-grid";
import { faker } from "@faker-js/faker";

function getEvents() {
  const months = [
    "September 2022",
    "October 2022",
    "November 2022",
    "December 2022",
  ];

  return months.map((month) => {
    const events = Array.from({
      length: Math.floor(Math.random() * 2 + 2),
    }).map(() => {
      return {
        title: faker.company.bsNoun() + " " + faker.company.bsAdjective(),
        date: faker.date.future(),
        description: faker.lorem.lines(5),
        src: "./images/charts.jpg",
      };
    });

    return {
      month,
      events,
    };
  });
}

const events = getEvents();

const Events = () => {
  const groups = events.map((g) => {
    const eCards = g.events.map((e) => {
      return (
        <EventCard
          key={e.title}
          title={e.title}
          date={e.date}
          description={e.description}
          src={e.src}
        />
      );
    });

    return (
      <>
        <GroupTitle title={g.month} />
        <CardGrid>{eCards}</CardGrid>
      </>
    );
  });

  return (
    <>
      <Jumbotron
        title={"Upcoming Events"}
        description={"Events the BCA has planned this year."}
      />
      {groups}
    </>
  );
};

export default Events;
