import { IconUser } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";
import { DataUser } from "../../data";

const Testimonial = () => {
  return (
    <SectionItem
      title="Testimonial"
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Quotes fuel my <span>inspiration</span>
      </div>
      <p className={style.smallText}>{DataUser.about.smallText}</p>
    </SectionItem>
  );
};

export default Testimonial;
