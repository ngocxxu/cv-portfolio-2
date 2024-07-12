import { Outlet } from 'react-router-dom';
import './style.css';
import { ReactLenis } from 'lenis/react';

const Layout = () => {
  return (
    <ReactLenis root className='layout'>
      <Outlet />
    </ReactLenis>
  );
};

export default Layout;
