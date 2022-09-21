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
            Leach22 - a UN goal-based training platform. Register/Log in to
            check the available courses. As a registered User you can register
            for an available course, as well as update and delete your
            registration.
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
