import Jumbotron from "../components/jumbotron/jumbotron";
import ImageStatement from "../components/image-statement/image-statement";
import Timeline from "../components/timeline/timeline";
import CardGrid from "../components/card-grid/card-grid";
import IconCard from "../components/icon-card/icon-card";
import GroupTitle from "../components/group-title/group-title";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BuildIcon from "@mui/icons-material/Build";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SuperVisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const Freshman = () => {
  return (
    <>
      <Jumbotron title={"Freshman Experience"} />
      <GroupTitle title={"Overview"} />
      <ImageStatement
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
      <CardGrid>
        <IconCard
          icon={<DataUsageIcon />}
          title={"Interview Prep"}
          description={
            "By practicing frameworks and problem-solving skills, students will learn how to succeed in the case interview process."
          }
          color={"blue_dark"}
        />
        <IconCard
          icon={<HowToRegIcon />}
          title={"Experience"}
          description={
            "Students will gain hands-on client experience that they will be able to put on their resumes and leverage to get consulting positions. "
          }
          color={"blue_mid"}
        />
        <IconCard
          icon={<SuperVisorAccountIcon />}
          title={"Mentorship"}
          description={
            "Students will get direct access and coaching from one of our experienced project leaders along with the entire BCA Eboard. "
          }
          color={"blue_light"}
        />
        <IconCard
          icon={<DataUsageIcon />}
          title={"Interview Prep"}
          description={
            "By practicing frameworks and problem-solving skills, students will learn how to succeed in the case interview process."
          }
          color={"grey_dark"}
        />
      </CardGrid>
    </>
  );
};

export default Freshman;
