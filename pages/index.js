import Nav from '../components/nav/nav'
import Chip from '../components/chip/chip'
import Jumbotron from '../components/jumbotron/jumbotron'

const Home = () => {
  return (
    <div>
      <Nav />
      <Jumbotron />
        <div>
          <Chip title='Practice Areas' number = '7'/>
          <Chip title='Annual Clients' number = '36'/>
          <Chip title='Years Experience' number = '20'/>
        </div>
    </div>
  );
};


export default Home;
