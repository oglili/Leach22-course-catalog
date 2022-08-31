import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, StatsUnivContainer, Loading } from '../../components';

const Stats = () => {
  const { showStats, isLoading } = useAppContext();
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      <hr
        style={{
          color: '#6763b8',
          borderColor: '#6763b8',
          height: '3px',
          marginBottom: '80px',
          marginTop: '30px',
        }}
      />
      <StatsUnivContainer />
    </>
  );
};

export default Stats;
