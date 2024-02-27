import { IconArrowDown, IconHome } from "@tabler/icons-react";
import { differenceInMonths } from "date-fns";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import Square from "../../assets/logo/round-text.png";
import { SectionItem } from "../../components/sectionItem";
import { DataUser } from "../../data";
import style from "./style.module.css";

const Home = () => {
  const startDate = new Date(2021, 5); // June (0-indexed month)
  const endDate = new Date();
  const monthsWorked = differenceInMonths(endDate, startDate) - 2;
  const yearsWorked = (monthsWorked / 13).toFixed(1);

  return (
    <SectionItem
      title="Introduce"
      icon={<IconHome size="0.9rem" style={{ marginRight: "5px" }} />}
    >
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
      <a className={style.rotate}>
        <img className={style.image} src={Square} alt="round-text" />
        <IconArrowDown size="2.5rem" className={style.arrow} />
      </a>
      <div className={style.statistic}>
        <div>
          <div>
            <CountUp
              decimals={1}
              decimal=","
              end={Number(yearsWorked) + 10}
              duration={20}
            />
            +
          </div>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <div>
            <CountUp end={10} duration={20} />+
          </div>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </SectionItem>
  );
};

export default Home;
