import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { FcPhone } from 'react-icons/fc';
import { HiOutlineCalendar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Course';
import CourseInfo from './CourseInfo';

const Reg = ({
  _id,
  name,
  type,
  university,
  birthdate,
  gender,
  address,
  phoneNr,
  createdAt,
}) => {
  const { setEditRegistration, deleteRegistration } = useAppContext();
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
  let birthday = moment(birthdate);
  birthday = birthday.format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <p>{name}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <CourseInfo icon={<FaBriefcase />} text={university} />
          <CourseInfo icon={<FaLocationArrow />} text={gender} />
          <CourseInfo icon={<HiOutlineCalendar />} text={birthday} />
          <CourseInfo icon={<MdPlace />} text={address} />
          <CourseInfo icon={<FcPhone />} text={phoneNr} />
          <CourseInfo icon={<FaCalendarAlt />} text={date} />
          <div className={`univ ${type}`}>{type}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-registration'
              onClick={() => setEditRegistration(_id)}
              className='btn edit-btn'
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteRegistration(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Reg;
