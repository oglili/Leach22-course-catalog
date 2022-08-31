import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Course from './Course';
import Wrapper from '../assets/wrappers/CoursesContainer';
import PageBtnContainer from './PageBtnContainer';

const CoursesContainer = () => {
  const {
    getCourses,
    courses,
    isLoading,
    page,
    totalCourses,
    search,
    searchType,
    searchUniv,
    sort,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getCourses();
  }, [page, search, searchType, searchUniv, sort]);

  if (isLoading) {
    return <Loading center />;
  }
  if (courses.length === 0) {
    return (
      <Wrapper>
        <h2>No courses to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalCourses} course{courses.length > 1 && 's'} found
      </h5>
      <div className='courses'>
        {courses.map((course) => {
          return <Course key={course._id} {...course} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default CoursesContainer;
