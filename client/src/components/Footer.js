import Leach22 from '../assets/images/Leach22.png';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='container footer'>
        <img src={Leach22} alt='leach22' />
        <p>Oghomwen Osazuwa &copy; 2022</p>
        <a href='#' className='hide'>
          <BsFillArrowUpSquareFill
            style={{
              color: '#6c63ff',
              fontSize: '2em',
            }}
          />
        </a>
      </div>
    </>
  );
};
export default Footer;
