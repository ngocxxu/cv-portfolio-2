import { TypeAnimation } from 'react-type-animation';
import Square from '../../assets/logo/round-text.png';
import { SectionItem } from '../../components/sectionItem';
import { DataUser } from '../../data';
import style from './style.module.css';
import { IconArrowDown } from '@tabler/icons-react';
import CountUp from 'react-countup';

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
      <a className={style.rotate}>
        <img className={style.image} src={Square} alt='round-text' />
        <IconArrowDown className={style.arrow} />
      </a>
      <div className={style.statistic}>
        <div>
          <div>
            <CountUp decimals={1} decimal=',' end={2.5} duration={20} />+
          </div>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <div>
            <CountUp end={10} />+
          </div>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </SectionItem>
  );
};

export default Home;
