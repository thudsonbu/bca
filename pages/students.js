import Jumbotron from '../components/jumbotron/jumbotron';
import CardGrid from '../components/card-grid/card-grid';
import ModalCard from '../components/modal-card/modal-card';
import SectionTitle from '../components/group-title/group-title';
import SectionSubtitle from '../components/section-subtitle/section-subtitle';
import GroupTitle from '../components/group-title/group-title';
import EventCard from '../components/event-card/event-card';
import Statement from '../components/statement/statement';
import styles from '../styles/team.module.scss';

const Students = () => {
  return (
    <>
      <Jumbotron
        title={'Consulting Experience'}
      />
      <GroupTitle
        title={'Member Experience'}
      />
      <Statement
        reverse={false}
        src={'./images/team.jpg'}
        description={'With the Bentley Consulting Association, members gain hands-on experience that helps prepare them for the consulting industry. The Freshman Experience is designed to give first semester students an introduction to consulting and case competitions, which are valuable experiences to add to their resumes. In the Bootcamp Program, students will have the opportunity to learn fundamental consulting skills and engage with clients. If successful in the Bootcamp, students will be invited to become an Associate Consultant, where they will be able to complete client projects to build up their consulting ability and have access to exclusive networking events, guest speakers, and skills events.'}
      />
      <GroupTitle
        title={'Freshman Experience'}
      />
      <Statement
        reverse={true}
        src={'./images/team.jpg'}
        description={'This is a five-week program that culminates in a case presentation. Throughout the program, sessions will be split between instruction and application. Members of the BCA Executive Board will present important skills to apply for a case study at each session. Students will then have time to work in groups to analyze a case study and apply these skills to create their recommendations. As the team is working through this case competition, they will be able to ask questions and seek mentorship directly from BCA Eboard members. When the program is complete, teams will present their recommendations to a panel of industry professionals, which is a great networking opportunity, to compete for prizes! Successful teams will also be prime candidates for the Spring Semester Bootcamp program.'}
      />
      <CardGrid>
      </CardGrid>
    </>
  );
};

export default Students;
