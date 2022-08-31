import Wrapper from '../assets/wrappers/CourseInfo';
const CourseInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  );
};
export default CourseInfo;
