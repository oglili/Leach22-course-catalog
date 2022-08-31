import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Course';
import CourseInfo from './CourseInfo';

const CourseTot = ({
  _id,
  name,
  courseLocation,
  type,
  university,
  createdAt,
}) => {
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
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
          <CourseInfo icon={<FaLocationArrow />} text={courseLocation} />
          <CourseInfo icon={<FaCalendarAlt />} text={date} />
          <CourseInfo icon={<FaBriefcase />} text={university} />
          <div className={`univ ${type}`}>{type}</div>
          {/* footer content */}
        </div>
      </div>
    </Wrapper>
  );
};

export default CourseTot;
