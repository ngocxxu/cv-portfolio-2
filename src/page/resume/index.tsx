import { IconUser } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";
import { TimelineCustom } from "../../components/timeline";
import { DataUser } from "../../data";

const Resume = () => {
  return (
    <SectionItem
      title="Resume"
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Education & <span>Experience</span>
      </div>
      <TimelineCustom body={DataUser.resume.experience} />
    </SectionItem>
  );
};

export default Resume;
