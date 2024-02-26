import { TypeAnimation } from "react-type-animation";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";

const Home = () => {
  return (
    <SectionItem>
      <TypeAnimation
        sequence={["Say Hi from Drake, Webflow Designer and Developer", 1000]}
        speed={50}
        repeat={Infinity}
        className={style.title}
      />
    </SectionItem>
  );
};

export default Home;
