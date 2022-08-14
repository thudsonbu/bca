import Jumbotron from "../components/jumbotron/jumbotron";
import GroupTitle from "../components/group-title/group-title";
import Statement from "../components/statement/statement";
import SectionSubtitle from "../components/section-subtitle/section-subtitle";
import Timeline from "../components/timeline/timeline";
import { faker } from "@faker-js/faker";

const Students = () => {
  return (
    <>
      <Jumbotron title={"Consulting Experience"} />
      <GroupTitle title={"Member Experience"} />
      <Statement
        reverse={false}
        src={"./images/team.jpg"}
        description={
          "With the Bentley Consulting Association, members gain hands-on experience that helps prepare them for the consulting industry. The Freshman Experience is designed to give first semester students an introduction to consulting and case competitions, which are valuable experiences to add to their resumes. In the Bootcamp Program, students will have the opportunity to learn fundamental consulting skills and engage with clients. If successful in the Bootcamp, students will be invited to become an Associate Consultant, where they will be able to complete client projects to build up their consulting ability and have access to exclusive networking events, guest speakers, and skills events."
        }
      />
      <GroupTitle title={"Freshman Experience"} />
      <Statement
        reverse={true}
        src={"./images/team.jpg"}
        description={
          "This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application. Members of the BCA Executive Board will present important skills to apply for a case study at each session. Students will then have time to work in groups to analyze a case study and apply these skills to create their recommendations. As the team is working through this case competition, they will be able to ask questions and seek mentorship directly from BCA Eboard members. When the program is complete, teams will present their recommendations to a panel of industry professionals, which is a great networking opportunity, to compete for prizes! Successful teams will also be prime candidates for the Spring Semester Bootcamp program."
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
    </>
  );
};

export default Students;
