import { IconCategory } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import { DataUser } from "../../data";
import style from "./style.module.css";

const Portfolio = () => {
  return (
    <SectionItem
      title="Portfolio"
      icon={<IconCategory size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Every great developer begin with an even <span>better story</span>
      </div>
      <p className={style.smallText}>{DataUser.about.smallText}</p>
    </SectionItem>
  );
};

export default Portfolio;
