import Jumbotron from '../components/jumbotron/jumbotron';
import ModalCard from '../components/modal-card/modal-card';

import styles from '../styles/home.module.scss';


const content = [
  {
    src: '../banana.jpeg',
    title: 'This is a Banana',
    description: 'Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6.'
  },
  {
    src: '../banana.jpeg',
    title: 'This is a Banana',
    description: 'Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6. Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6. ',
    link: '/banana',
    link_text: 'learn more'
  },
  {
    src: '../banana.jpeg',
    title: 'This is a Banana',
    description: 'Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6. Are bananas good for you? Yes! A wide variety of health benefits are associated with the curvy yellow fruit. Bananas are high in potassium and pectin, a form of fiber, said Laura Flores, a San Diego-based nutritionist. They can also be a good way to get magnesium and vitamins C and B6. ',
    link: '/banana',
    link_text: 'learn more'
  }
];


const Home = () => {
  return (
    <div>
      <Jumbotron />
      <ModalCard />
    </div>
  );
};

export default Home;
