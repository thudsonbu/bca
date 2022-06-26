import Nav from "../components/nav/nav";
import Jumbotron from "../components/jumbotron/jumbotron";
import Card from "../components/card/card";

const Home = () => {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
