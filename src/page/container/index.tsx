import { LeftSidebar } from "../../components/leftSidebar";
import { RightSidebar } from "../../components/rightSidebar";
import Home from "../home";

export const ContainerPage = () => {
  return (
    <div>
      <LeftSidebar />
      <Home />
      <RightSidebar />
    </div>
  );
};
