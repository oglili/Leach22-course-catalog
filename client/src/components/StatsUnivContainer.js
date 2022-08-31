import { useAppContext } from '../context/appContext';
import StatItem from './StatItem';
import { FaCalendarCheck } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
const StatsUnivContainer = () => {
  const { statsUniv } = useAppContext();
  const defaultUnivStats = [
    {
      title: 'University of Sicilia',
      count: statsUniv['University of Sicilia'] || 0,
      icon: <FaCalendarCheck />,
      color: '#627d98',
      bcg: '#ffeeee',
    },
    {
      title: 'University of Rome',
      count: statsUniv['University of Rome'] || 0,
      icon: <FaCalendarCheck />,
      color: '#627d98',
      bcg: '#ffeeee',
    },
    {
      title: 'University of Torino',
      count: statsUniv['University of Torino'] || 0,
      icon: <FaCalendarCheck />,
      color: '#627d98',
      bcg: '#ffeeee',
    },
    {
      title: 'University of Verona',
      count: statsUniv['University of Verona'] || 0,
      icon: <FaCalendarCheck />,
      color: '#627d98',
      bcg: '#ffeeee',
    },
    {
      title: 'University of Brescia',
      count: statsUniv['University of Brescia'] || 0,
      icon: <FaCalendarCheck />,
      color: '#627d98',
      bcg: '#ffeeee',
    },
    {
      title: 'University of Milan',
      count: statsUniv['University of Milan'] || 0,
      icon: <FaCalendarCheck />,
      color: '#627d98',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultUnivStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsUnivContainer;
