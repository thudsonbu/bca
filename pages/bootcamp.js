import Jumbotron      from "../components/jumbotron/jumbotron";
import GroupTitle     from "../components/group-title/group-title";
import ImageStatement from "../components/image-statement/image-statement";
import InfoLeaf       from "../components/info-leaf/info-leaf";
import CardGrid       from "../components/card-grid/card-grid";
import ArrowLink      from "../components/arrow-link/arrow-link";

import GroupAddIcon          from "@mui/icons-material/GroupAdd";
import BuildIcon             from "@mui/icons-material/Build";
import DoubleArrowIcon       from "@mui/icons-material/DoubleArrow";
import DataUsageIcon         from "@mui/icons-material/DataUsage";
import HowToRegIcon          from "@mui/icons-material/HowToReg";
import SuperVisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import layout_styles   from "../styles/layouts.module.scss";
import bootcamp_styles from "../styles/bootcamp.module.scss";


const Bootcamp = () => {
  return (
    <>
      <Jumbotron title={"Bootcamp Experience"} />
      <GroupTitle title={"Overview"} />
      <div className={layout_styles.section}>
        <ImageStatement
          reverse={true}
          src={"./images/team.jpg"}
          description={
            "The BCA Bootcamp is a holistic introduction to the consulting industry. We equip creative, curious, and ambitious students with the tools to develop client solutions that have a real-world impact. We are always looking for Bentley’s best and brightest disruptors to help us pioneer the future of BCA. With us, you will grow personally and professionally, and have an experience like no other."
          }
        />
      </div>
      <GroupTitle title={"What you will learn"} />
      <div className={layout_styles.section}>
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
      </div>
      <div className={bootcamp_styles.signup_container}>
        <ArrowLink
          href={"/bootcamp"}
          size={"large"}
        >
          Signup
        </ArrowLink>
      </div>
    </>
  );
};

export default Bootcamp;
