import styles from "../styles/freshman.module.scss";

import Jumbotron  from "../components/jumbotron/jumbotron";
import Timeline   from "../components/timeline/timeline";
import GroupTitle from "../components/group-title/group-title";
import Statement  from "../components/statement/statement";
import ArrowLink  from "../components/arrow-link/arrow-link";

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
              "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application.",
          },
          {
            title: "Week 2: Light Framework Day",
            eyebrow: "10/12/2022",
            description:
              "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application.",
          },
          {
            title: "Week 3: Basic Finance Modeling",
            eyebrow: "10/17/2022",
            description:
              "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application.",
          },
          {
            title: "Week 4: Slide Deck Layouts and Tools",
            eyebrow: "10/17/2022",
            description:
              "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application.",
          },
          {
            title: "Week 5: How to Present",
            eyebrow: "10/31/2022",
            description:
              "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application.",
          },
          {
            title: "Week 6: Case Presentation",
            eyebrow: "11/5/2022",
            description:
              "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application.",
          },
        ]}
      />
      <div className={styles.signup_container}>
        <ArrowLink
          href={"/students/bootcamp"}
          size={"large"}
        >
          Signup
        </ArrowLink>
      </div>
    </>
  );
};

export default Freshman;
