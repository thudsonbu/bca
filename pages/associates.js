import Jumbotron  from "../components/jumbotron/jumbotron";
import CardGrid   from "../components/card-grid/card-grid";
import IconCard   from "../components/icon-card/icon-card";
import GroupTitle from "../components/group-title/group-title";
import Statement  from "../components/statement/statement";

import DataUsageIcon         from "@mui/icons-material/DataUsage";
import HowToRegIcon          from "@mui/icons-material/HowToReg";
import SuperVisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import { faker } from "@faker-js/faker";

const paragraphs = faker.lorem.paragraphs();

const Freshman = () => {
  return (
    <>
      <Jumbotron title={"Associate Experience"} />
      <GroupTitle title={"Overview"} />
      <Statement text={ paragraphs }/>
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
