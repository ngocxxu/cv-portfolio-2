import { LeftSidebar } from "../../components/leftSidebar";
import { RightSidebar } from "../../components/rightSidebar";
import About from "../about";
import Home from "../home";
import MySkills from "../mySkills";
import Resume from "../resume";
import Testimonial from "../testimonial";

export const ContainerPage = () => {
  return (
    <div>
      <LeftSidebar />
      <Home />
      <About />
      <Resume />
      <MySkills />
      <Testimonial />
      <RightSidebar />
    </div>
  );
};
