import { IconUser } from "@tabler/icons-react";
import { Animation } from "../../components/animation";
import { SectionItem } from "../../components/sectionItem";
import { DataUser } from "../../data";
import { hiddenVisible } from "../../utils/animation";
import style from "./style.module.css";

const About = () => {
  return (
    <SectionItem
      title="About"
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          Every great developer begin with an even <span>better story</span>
        </div>
      </Animation>

      <Animation variants={hiddenVisible}>
        <p className={style.smallText}>{DataUser.about.smallText}</p>
      </Animation>
    </SectionItem>
  );
};

export default About;
