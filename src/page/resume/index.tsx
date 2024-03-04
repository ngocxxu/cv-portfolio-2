import { Box } from "@mantine/core";
import { IconBriefcase, IconCode, IconSchool } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import { TimelineCustom } from "../../components/timeline";
import { DataUser } from "../../data";
import style from "./style.module.css";
import { Animation } from "../../components/animation";
import { hiddenVisible } from "../../utils/animation";

const Resume = () => {
  return (
    <SectionItem
      title="Resume"
      icon={<IconBriefcase size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          Experience & <span>Education</span>
        </div>
      </Animation>

      <Animation variants={hiddenVisible}>
        <TimelineCustom
          icon={<IconCode color="#f2f2f2" size="1rem" />}
          body={DataUser.resume.experience}
        />
      </Animation>

      <Box my={50} />

      <Animation variants={hiddenVisible}>
        <TimelineCustom
          icon={<IconSchool size="1rem" />}
          body={DataUser.resume.education}
        />
      </Animation>
    </SectionItem>
  );
};

export default Resume;
