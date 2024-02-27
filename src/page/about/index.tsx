import { IconUser } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";
import { DataUser } from "../../data";

const About = () => {
  return (
    <SectionItem
      title="About"
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Every great developer begin with an even <span>better story</span>
      </div>
      <p className={style.smallText}>{DataUser.about.smallText}</p>
    </SectionItem>
  );
};

export default About;
