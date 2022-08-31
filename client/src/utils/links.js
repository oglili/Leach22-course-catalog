import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'my courses',
    path: 'all-courses',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'total courses',
    path: 'total-courses',
    icon: <MdQueryStats />,
  },
  {
    id: 4,
    text: 'add course',
    path: 'add-course',
    icon: <FaWpforms />,
  },

  {
    id: 5,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
