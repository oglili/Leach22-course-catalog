import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Course';
import CourseInfo from './CourseInfo';

const Course = ({ _id, name, courseLocation, type, university, createdAt }) => {
  const { setEditCourse, deleteCourse } = useAppContext();
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
        <footer>
          <div className='actions'>
            <Link
              to='/add-course'
              onClick={() => setEditCourse(_id)}
              className='btn edit-btn'
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteCourse(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Course;
