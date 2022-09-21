import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Reg from './Reg';
import Wrapper from '../assets/wrappers/CoursesContainer';
import PageBtnContainer from './PageBtnContainer';

const RegContainer = () => {
  const { getRegistrations, reg, isLoading, page, totalReg, numOfPages } =
    useAppContext();
  useEffect(() => {
    getRegistrations();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (reg.length === 0) {
    return (
      <Wrapper>
        <h2>No Registration to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalReg} registration{reg.length > 1 && 's'} found
      </h5>
      <div className='courses'>
        {reg.map((register) => {
          return <Reg key={register._id} {...register} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default RegContainer;
