import { TypeAnimation } from "react-type-animation";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";
import { DataUser } from "../../data";

const Home = () => {
  return (
    <SectionItem>
      <TypeAnimation
        sequence={[DataUser.home.bigText, 1000, DataUser.home.bigText2, 1000]}
        speed={50}
        repeat={Infinity}
        className={style.title}
      />
    </SectionItem>
  );
};

export default Home;
