import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavLinkUsers from './NavLinkUsers';

export const SmallSidebar = () => {
  const { user, showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='sidebar-container show-sidebar'>
          <div className='content'>
            <button className='close-btn' onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
            {user.admin ? (
              <NavLinks toggleSidebar={toggleSidebar} />
            ) : (
              <NavLinkUsers toggleSidebar={toggleSidebar} />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
