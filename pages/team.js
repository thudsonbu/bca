import Jumbotron from '../components/jumbotron/jumbotron';
import ModalCard from '../components/modal-card/modal-card';

const Team = () => {
  return (
    <>
      <Jumbotron
        title={'Executive Board'}
        description={'Meet the Executive Board.'}
      />
      <ModalCard
        name={'Brenna Masterson'}
        src="./images/headshots/celia_schurman.jfif"
        title={'About'}
        description={'The Bentley Consulting Association is the premiere consulting organization on the Bentley University Campus. The organization has created a community that works together to achieve their goals in the consulting space, including generating awareness about consulting, and finding internships and full-time positions. Launched in 2019, BCA has undergone a number of transformations. The recently re-branded organization has grown exponentially, created a Bootcamp program, hosted case competitions, and engaged in numerous probono consulting projects with real world clients. If you are interested in consulting, learning about the field or preparing for a career, the Bentley Consulting Association is the organization for you!'}
        linkedinLink={'starry.com'}
        emailLink={'email.com'}
      />
    </>
  );
};

export default Team;
