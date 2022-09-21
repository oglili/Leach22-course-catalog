import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

export const links = [
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
    text: 'add course',
    path: 'add-course',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'total registration',
    path: 'total-registrations',
    icon: <MdQueryStats />,
  },
  {
    id: 5,
    text: 'my registrations',
    path: 'all-registrations',
    icon: <MdQueryStats />,
  },
  {
    id: 6,
    text: 'register a course',
    path: 'add-registration',
    icon: <FaWpforms />,
  },

  {
    id: 7,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export const linkUsers = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'total courses',
    path: 'total-courses',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'my registrations',
    path: 'all-registrations',
    icon: <MdQueryStats />,
  },
  {
    id: 4,
    text: 'register a course',
    path: 'add-registration',
    icon: <FaWpforms />,
  },
  {
    id: 5,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];
