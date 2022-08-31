import { useAppContext } from '../context/appContext';
import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: 'bachelor program',
      count: stats.bachelor || 0,
      icon: <FaSuitcaseRolling />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'masters program',
      count: stats.masters || 0,
      icon: <FaSuitcaseRolling />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'postgraduate program',
      count: stats.postgraduate || 0,
      icon: <FaSuitcaseRolling />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
