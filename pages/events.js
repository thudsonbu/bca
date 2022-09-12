import Jumbotron  from "../components/jumbotron/jumbotron";
import GroupTitle from "../components/group-title/group-title";
import EventCard  from "../components/event-card/event-card";
import CardGrid   from "../components/card-grid/card-grid";

import { faker } from "@faker-js/faker";

const events = [
  {
    month:  'September 2022',
    events: [
      {
        title: 'Introduction to Bentley Consulting Association',
        date: 'September 13th, at 2pm EST (Smith 307)',
        description: 'This meeting will introduce the BCA organization and the events we have planned for this semester, as well as our corporate partnership with Slalom, an international technology consulting firm. Come learn about all of the amazing opportunities for you to engage with Bentley’s premier consulting organization & advance your career via client projects and networking events.',
        src: './images/Event1.jpg'
      },
      {
        title: 'Deloitte Info Session',
        date: 'September 21, 7pm - 8pm EST',
        description: 'We are hosting Deloitte Consulting! Join us to learn about career opportunities in consulting and Deloitte’s company culture from Bentley Alumni. This is a great opportunity for networking and career advancement.',
        src: './images/Event2.jpg'
      },
      {
        title: 'Corporate Partnership: Slalom Consulting',
        date: 'September 27, 2pm EST (Smith 307)',
        description: 'We have partnered with Slalom, an international technology consulting firm, to provide professional expertise and mentorship to our members. At this session, you will have the chance to walk through a data analytics case with Slalom consultants and receive live feedback! This is an amazing opportunity to learn about the consulting process and experience a day in the life of a consultant.',
        src: './images/Event3.jpg'
      }
    ],
  },
  {
    month:  'October 2022',
    events: [
      {
        title: 'Corporate Partnership: Slalom Consulting',
        date: 'October 4th, 2pm EST (Smith 307)',
        description: 'At this event, Slalom will introduce a fundamental skill for consulting: storyboarding! You will learn how to approach a client engagement, structure your thinking, and implement frameworks in order to be a successful consultant.',
        src: './images/Event4.jpg'
      },
      {
        title: 'Slalom Consulting: Executive Presence',
        date: 'October 18th, 2pm EST (Smith 307)',
        description: 'Slalom will teach executive presence, a key aspect of being a successful consultant. This is a great opportunity to improve your professionalism, specifically in written and verbal communication and presentations.',
        src: './images/Event5.jpg'
      },
      {
        title: 'Consulting Lifestyle Speaker Panel',
        date: 'October 26th, 9:30pm EST (Smith 307)',
        description: 'We will be joined by consultants across a variety of different firms to discuss the consulting lifestyle. Consultants from Boston Consulting Group, Deloitte, and CFO Solutions will share their experiences with life on the road and their clients. Come to this panel to have all of your consulting lifestyle questions answered!',
        src: './images/Event6.jpg'
      }
    ],
  },
  {
    month: 'November 2022',
    events: [
      {
        title: 'Slalom Consulting: Client Resolution and Management',
        date: 'November 1st, 2pm EST (Smith 307)',
        description: 'Slalom will discuss how to manage client relationships. This management includes communication methods, managing expectations, and most importantly, problem resolution! This session prepares memebers for the central aspect of consulting: client-facing work.',
        src: './images/Event7.jpg'
      },
      {
        title: 'Slalom Consulting: Day in the Life Speaker Panel',
        date: 'November 8th, 2pm EST (Smith 307)',
        description: "In our final session with Slalom, Slalom consultants and members will participate in a Q&A session about any aspect of a consultant's life. After being introduced to several fundamental aspects of being a consultant, this panel will increase your understanding of the consulting lifestyle.",
        src: './images/Event8.jpg'
      },
      {
        title: 'Recruiting Process Speaker Panel',
        date: 'November 16th, 2pm EST (Smith 307)',
        description: 'Come learn how to be successful in the consulting recruiting process! We are being joined by a PwC campus recruiter to share their insights on how to stand out in the recruiting process. Additionally, we will be joined by an Associate Consultant at Boston Consulting Group to share their experiences in the recruitment process.',
        src: './images/Event9.jpg'
      }
    ]
  }
];

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
        description={"Events the BCA has planned this year"}
      />
      {groups}
    </>
  );
};

export default Events;
