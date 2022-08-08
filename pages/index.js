import Jumbotron from '../components/jumbotron/jumbotron';
import Statement from '../components/statement/statement';
import SectionTitle from '../components/section-title/section-title';
import ContentGrid from '../components/content-grid/content-grid';
import Partners from '../components/partners/partners';
import CardGroup from '../components/card-group/card-group';
import Card from '../components/card-group/card-group';

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Statement
        src="./images/BCALogo.png"
        title={'About'}
        description={'The Bentley Consulting Association is the premiere consulting organization on the Bentley University Campus. The organization has created a community that works together to achieve their goals in the consulting space, including generating awareness about consulting, and finding internships and full-time positions. Launched in 2019, BCA has undergone a number of transformations. The recently re-branded organization has grown exponentially, created a Bootcamp program, hosted case competitions, and engaged in numerous probono consulting projects with real world clients. If you are interested in consulting, learning about the field or preparing for a career, the Bentley Consulting Association is the organization for you!'}
      />
      <SectionTitle
        title={'What We Do'}
      />
      <ContentGrid
        items={[
          {
            src: './images/education.jpg',
            title: 'Real Experience, Real Skills',
            description: 'Our members reinforce concepts taught through our Bootcamp and Associate Consultant programming by working on actual client projects. These engagements vary across business segments, allowing our members to develop diverse technical skills along with important soft skills needed to be successful in consulting. These include presentation skills, professionalism, and many more!'
          },
          {
            src: './images/charts.jpg',
            title: 'Bootcamps',
            description: 'Our 5-week Bootcamp serves as the primary source of entry for the organization. In the BCA Bootcamp, students learn fundamental skills necessary for completing the consulting process. This program culminates in a client project where members apply their skills to develop real world experience.'
          },
          {
            src: './images/events.jpg',
            title: 'Case Competitions',
            description: 'BCA hosts a case competition each semester: freshman case competition in the fall, and an intercollegiate competition in the spring. These case competitions give participants valuable experience in solving complex business problems and creating final presentations for a panel of judges working in consulting.'
          },
          {
            src: './images/team.jpg',
            title: 'Client Projects',
            description: 'As both a Bootcamp Participant and an Associate Consultant, members have the opportunity to work with real life businesses to complete probono consulting projects. These engagements allow our members to apply skills taught by BCA and expand their knowledge in a variety of business segments. '
          }
        ]}
      />
      <SectionTitle
        title={'Our Partners'}
      />
      <Partners
        partners={[
          { src: './images/slalom.png', style: 'slalom' },
          { src: './images/massaro.webp', style: 'massaro' },
          { src: './images/rsm.png', style: 'rsm' },
          { src: './images/deloitte.png', style: 'deloitte' },
          { src: './images/ey.png', style: 'ey' },
          { src: './images/pwc.png', style: 'pwc' }

        ]}
      />
      <SectionTitle
        title={'Learn More'}
      />
      <CardGroup
        columns={3}
      >
        <Card
          title={'Card 1'}
          description={'As both a Bootcamp Participant and an Associate Consultant, members have the opportunity to work with real life businesses to complete probono consulting projects. These engagements allow our members to apply skills taught by BCA and expand their knowledge in a variety of business segments.'}
          src={'./images/team.jpg'}
        />
      </CardGroup>
    </>
  );
};

export default Home;
