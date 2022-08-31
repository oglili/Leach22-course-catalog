import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Course <span>Catalog</span>
          </h1>
          <p>
            Leach22 - a UN goal-based training platform. This app provides a way
            for insertion of the courses offered by the platform into the
            database. As a User you can retrieve a list of all the courses, as
            well as add, update and delete courses you created.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='course entry' className='img main-img' />
      </div>
    </Wrapper>
  );
}

export default Landing;
