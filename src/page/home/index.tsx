import { TypeAnimation } from "react-type-animation";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";
import { DataUser } from "../../data";

const Home = () => {
  return (
    <SectionItem>
      <div className={style.bigText}>
        <TypeAnimation
          sequence={[DataUser.home.bigText, 1000, DataUser.home.bigText2, 1000]}
          speed={30}
          deletionSpeed={70}
          repeat={Infinity}
          className={style.title}
        />
      </div>
      <p className={style.smallText}>{DataUser.home.smallText}</p>
    </SectionItem>
  );
};

export default Home;
