import { LeftSidebar } from "../../components/leftSidebar";
import { RightSidebar } from "../../components/rightSidebar";
import About from "../about";
import Home from "../home";
import Resume from "../resume";

export const ContainerPage = () => {
  return (
    <div>
      <LeftSidebar />
      <Home />
      <About />
      <Resume />
      <RightSidebar />
    </div>
  );
};
