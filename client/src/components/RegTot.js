import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { FcPhone } from 'react-icons/fc';
import { HiOutlineCalendar } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/Course';
import CourseInfo from './CourseInfo';

const RegTot = ({
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
      </div>
    </Wrapper>
  );
};

export default RegTot;
