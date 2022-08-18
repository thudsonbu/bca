import Jumbotron from "../components/jumbotron/jumbotron";
import GroupTitle from "../components/group-title/group-title";
import ImageStatement from "../components/image-statement/image-statement";
import Timeline from "../components/timeline/timeline";
import InfoLeaf from "../components/info-leaf/info-leaf";
import CardGrid from "../components/card-grid/card-grid";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BuildIcon from "@mui/icons-material/Build";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SuperVisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const Bootcamp = () => {
  return (
    <>
      <Jumbotron title={"Consulting Experience"} />
      <GroupTitle title={"Member Experience"} />
      <ImageStatement
        reverse={false}
        src={"./images/team.jpg"}
        description={
          "With the Bentley Consulting Association, members gain hands-on experience that helps prepare them for the consulting industry. The Freshman Experience is designed to give first semester students an introduction to consulting and case competitions, which are valuable experiences to add to their resumes. In the Bootcamp Program, students will have the opportunity to learn fundamental consulting skills and engage with clients. If successful in the Bootcamp, students will be invited to become an Associate Consultant, where they will be able to complete client projects to build up their consulting ability and have access to exclusive networking events, guest speakers, and skills events."
        }
      />
      <GroupTitle title={"Freshman Experience"} />
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
      <GroupTitle title={"Bootcamp Experience"} />
      <CardGrid>
        <InfoLeaf
          icon={<GroupAddIcon />}
          title={"Networking"}
          description={
            "Develop a strong network of fellow future consultants, along with industry professionals, to cultivate a consulting community and provide opportunities. "
          }
        />
        <InfoLeaf
          icon={<BuildIcon />}
          title={"Problem Solving"}
          description={
            "Students will learn how to approach problems logically and creatively, which will be reinforced through client projects. "
          }
        />
        <InfoLeaf
          icon={<DoubleArrowIcon />}
          title={"Skill Development"}
          description={
            "Prepare for client engagement by developing skills important to the consulting process, including PowerPoint and frameworks. "
          }
        />
      </CardGrid>
      <CardGrid>
        <InfoLeaf
          icon={<DataUsageIcon />}
          title={"Interview Prep"}
          description={
            "By practicing frameworks and problem-solving skills, students will learn how to succeed in the case interview process."
          }
        />
        <InfoLeaf
          icon={<HowToRegIcon />}
          title={"Experience"}
          description={
            "Students will gain hands-on client experience that they will be able to put on their resumes and leverage to get consulting positions. "
          }
        />
        <InfoLeaf
          icon={<SuperVisorAccountIcon />}
          title={"Mentorship"}
          description={
            "Students will get direct access and coaching from one of our experienced project leaders along with the entire BCA Eboard. "
          }
        />
      </CardGrid>
    </>
  );
};

export default Bootcamp;
