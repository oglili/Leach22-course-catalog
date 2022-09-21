import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinkUsers from './NavLinkUsers';

const BigSidebar = () => {
  const { user, showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header></header>
          {user.admin ? <NavLinks /> : <NavLinkUsers />}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
