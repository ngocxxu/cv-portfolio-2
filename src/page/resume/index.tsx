import { Divider } from "@mantine/core";
import {
  IconBriefcase,
  IconCode,
  IconDeviceDesktopCode,
  IconSchool,
} from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import { TimelineCustom } from "../../components/timeline";
import { DataUser } from "../../data";
import style from "./style.module.css";

const Resume = () => {
  return (
    <SectionItem
      title="Resume"
      icon={<IconBriefcase size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Education & <span>Experience</span>
      </div>
      <TimelineCustom
        icon={<IconCode color="#f2f2f2" size="1rem" />}
        body={DataUser.resume.experience}
      />
      <Divider
        pb="lg"
        my="sm"
        variant="dotted"
        label={<IconDeviceDesktopCode />}
        labelPosition="left"
      />
      <TimelineCustom
        icon={<IconSchool size="1rem" />}
        body={DataUser.resume.education}
      />
    </SectionItem>
  );
};

export default Resume;
