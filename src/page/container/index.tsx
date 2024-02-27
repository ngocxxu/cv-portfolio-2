import { LeftSidebar } from "../../components/leftSidebar";
import { RightSidebar } from "../../components/rightSidebar";
import About from "../about";
import Home from "../home";

export const ContainerPage = () => {
  return (
    <div>
      <LeftSidebar />
      <Home />
      <About />
      <RightSidebar />
    </div>
  );
};
