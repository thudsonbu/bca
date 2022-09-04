import Jumbotron  from "../components/jumbotron/jumbotron";
import Timeline   from "../components/timeline/timeline";
import GroupTitle from "../components/group-title/group-title";
import Statement  from "../components/statement/statement";
import ArrowLink  from "../components/arrow-link/arrow-link";

import freshman_styles from "../styles/freshman.module.scss";
import layout_styles   from "../styles/layouts.module.scss";

const Freshman = () => {
  return (
    <>
      <Jumbotron title={"Freshman Experience"} />
      <GroupTitle title={"Overview"} />
      <Statement
        text={
          "The BCA Freshman Experience is a freshman’s first glimpse at the consulting industry. Freshmen enroll in our case competition and are supported through a series of five sessions that demonstrate the basics of the consulting profession. The Freshman Experience culminates in team presentations where students receive feedback from industry professionals."
        }
      />
      <Timeline
        title={"Case Competition Timeline"}
        events={[
          {
            title: "Week 1: Introduction to Consulting Cases",
            eyebrow: "10/3/2022",
            description:
              "We equip students with the tools and mindset needed to succeed in any case. Students learn how to approach and unravel a case with structured brainstorming.",
          },
          {
            title: "Week 2: Light Framework Day",
            eyebrow: "10/12/2022",
            description:
              "We introduce students to several of the most popular consulting frameworks that are highly useful for any type of problem solving.",
          },
          {
            title: "Week 3: Basic Finance Modeling",
            eyebrow: "10/17/2022",
            description:
              "Students are immersed in a step-by-step financial modeling activity in Excel and learn how to build on basic Excel functions.",
          },
          {
            title: "Week 4: Slide Deck Layouts and Tools",
            eyebrow: "10/17/2022",
            description:
              "Students are introduced to the art of a consulting-style PowerPoint deck and learn best practices for communicating key insights to any stakeholder.",
          },
          {
            title: "Week 5: How to Present",
            eyebrow: "10/31/2022",
            description:
              "We teach students key elements of a highly successful presentation in any environment. Students practice speaking techniques, body language, and confidence.",
          },
          {
            title: "Week 6: Case Presentation",
            eyebrow: "11/5/2022",
            description:
              "Freshmen Experience sessions culminate in presentations where students display solutions to the case and skills gained throughout the Experience.",
          },
        ]}
      />
      <div className={layout_styles.section}>
        <div className={freshman_styles.signup_container}>
          <ArrowLink
            href={"/bootcamp"}
            size={"large"}
          >
            Signup
          </ArrowLink>
        </div>
      </div>
    </>
  );
};

export default Freshman;
