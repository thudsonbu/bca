import Jumbotron from '../components/jumbotron/jumbotron';
import ModalCard from '../components/modal-card/modal-card';
import Modal from '../components/modal/modal';

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <ModalCard />
      <Modal
        name={'Banana'}
        title={'Banana Sources'}
        src={'../banana.jpeg'}
        description={'Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6. Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6.'}
        linkedinLink={'https://www.linkedin.com'}
        emailLink={'mailto:email'}
      />
    </div>
  );
};

export default Home;
