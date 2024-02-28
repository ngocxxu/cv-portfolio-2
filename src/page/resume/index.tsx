import { Box } from '@mantine/core';
import { IconBriefcase, IconCode, IconSchool } from '@tabler/icons-react';
import { SectionItem } from '../../components/sectionItem';
import { TimelineCustom } from '../../components/timeline';
import { DataUser } from '../../data';
import style from './style.module.css';

const Resume = () => {
  return (
    <SectionItem
      title='Resume'
      icon={<IconBriefcase size='0.9rem' style={{ marginRight: '5px' }} />}
    >
      <div className={style.bigText}>
        Experience & <span>Education</span>
      </div>
      <TimelineCustom
        icon={<IconCode color='#f2f2f2' size='1rem' />}
        body={DataUser.resume.experience}
      />

      <Box my={50} />

      <TimelineCustom
        icon={<IconSchool size='1rem' />}
        body={DataUser.resume.education}
      />
    </SectionItem>
  );
};

export default Resume;
