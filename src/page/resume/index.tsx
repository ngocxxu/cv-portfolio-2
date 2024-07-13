import { Box } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { Animation } from '../../components/animation';
import { SectionItem } from '../../components/sectionItem';
import { TimelineCustom } from '../../components/timeline';
import { DataUser } from '../../data';
import { hiddenVisible } from '../../utils/animation';
import style from './style.module.css';

const Resume = () => {
  return (
    <SectionItem
      title='Resume'
      icon={<IconBriefcase size='0.9rem' style={{ marginRight: '5px' }} />}
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          Work <span>Experience</span>
        </div>
      </Animation>

      <TimelineCustom body={DataUser.resume.experience} />

      <Box my={50} />

      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          My <span>Education</span>
        </div>
      </Animation>

      <TimelineCustom body={DataUser.resume.education} />
    </SectionItem>
  );
};

export default Resume;
