import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import RegTot from './RegTot';
import Wrapper from '../assets/wrappers/CoursesContainer';
import PageBtnContainer from './PageBtnContainer';

const RegContainerTot = () => {
  const { getRegistrationsTot, reg, isLoading, page, totalReg, numOfPages } =
    useAppContext();
  useEffect(() => {
    getRegistrationsTot();
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
          return <RegTot key={register._id} {...register} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default RegContainerTot;
