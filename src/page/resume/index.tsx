import { IconUser } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";

const Resume = () => {
  return (
    <SectionItem
      title="Resume"
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Education & <span>Experience</span>
      </div>
    </SectionItem>
  );
};

export default Resume;
