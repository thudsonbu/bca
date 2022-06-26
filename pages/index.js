import Nav from "../components/nav/nav";
import Jumbotron from "../components/jumbotron/jumbotron";
import Card from "../components/card/card";
import CardGroup from "../components/card-group/card-group"

import styles from '../styles/home.module.scss'

const Home = () => {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <div className={styles.stats}>
        <Card />
        <Card />
        <Card />
      </div>
      <CardGroup columns={4}>
        <Card img={true} description='This is a description about whatever'/>
        <Card img={true} description='This is a description about whatever'/>
        <Card img={true} description='This is a description about whatever'/>
        <Card img={true} description='This is a description about whatever'/>
      </CardGroup>
    </div>
  );
};

export default Home;
