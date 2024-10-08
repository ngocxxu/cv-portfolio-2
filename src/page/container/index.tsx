import { Area } from '../../components/area';
import { LeftSidebar } from '../../components/leftSidebar';
import { MiniRightSideBar } from '../../components/miniRightSideBar';
import { RightSidebar } from '../../components/rightSidebar';
import About from '../about';
import Contact from '../contact';
import Home from '../home';
import MySkills from '../mySkills';
import Portfolio from '../portfolio';
import Resume from '../resume';

export const ContainerPage = () => {
  return (
    <>
      <Area />
      <MiniRightSideBar />
      <LeftSidebar />
      <Home />
      <About />
      <Resume />
      <MySkills />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <RightSidebar />
    </>
  );
};
