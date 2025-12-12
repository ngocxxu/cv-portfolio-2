import { Badge, Box, Flex } from '@mantine/core';
import {
  IconBrandAdobe,
  IconBrandAws,
  IconBrandNextjs,
  IconBrandReact,
  IconCode,
  IconDatabase,
  IconMicroscope,
  IconTriangleSquareCircle,
  IconWalk
} from '@tabler/icons-react';
import { Animation } from '../../components/animation';
import { SectionItem } from '../../components/sectionItem';
import { hiddenVisible, hiddenVisibleSkills } from '../../utils/animation';
import style from './style.module.css';

const skills = [
  {
    icon: <IconBrandAws />,
    title: 'DevOps',
    detail: [
      'AWS',
      'K8s',
      'Ansible',
      'Terraform',
      'Github Action/ GitlabCI',
      'Argo/FluxCD',
      'Cloudflare',
      'Firebase',
    ],
  },
  {
    icon: <IconBrandNextjs />,
    title: 'Backend',
    detail: ['NestJS', 'ExpressJS', 'Redis', 'Hasura', 'Keycloak'],
  },
  {
    icon: <IconBrandReact />,
    title: 'Frontend',
    detail: [
      'NextJS',
      'ReactJS',
      'Svelte',
    ],
  },
  {
    icon: <IconDatabase />,
    title: 'Database',
    detail: ['PostgreSQL', 'MongoDB', 'GraphQL', 'CockroachDB'],
  },
  {
    icon: <IconMicroscope />,
    title: 'Unit test',
    detail: ['Vitest', 'FactoryBot', 'Jest'],
  },
  {
    icon: <IconCode />,
    title: 'Language',
    detail: ['Javascript/Typescript', 'C#', 'Java', 'Python', 'Ruby'],
  },
  {
    icon: <IconBrandAdobe />,
    title: 'Design',
    detail: ['Adobe Illustrator', 'Basic Adobe Photoshop', 'Adobe XD', 'Figma'],
  },
  {
    icon: <IconWalk />,
    title: 'Soft Skill',
    detail: [
      'Presentation',
      'Teamwork',
      'Learning skills',
      'Self-motivation',
      'Creativity',
    ],
  },
];

const MySkills = () => {
  return (
    <SectionItem
      title='My Skills'
      icon={
        <IconTriangleSquareCircle
          size='0.9rem'
          style={{ marginRight: '5px' }}
        />
      }
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          My <span>Advantage</span>
        </div>
      </Animation>

      <div className={style.list}>
        <div className={style.item}>
          {skills.map(({ detail, icon, title }) => (
            <Box mb={30} key={title}>
              <Animation variants={hiddenVisibleSkills}>
                <Badge
                  mb={15}
                  leftSection={icon}
                  variant='light'
                  size='xl'
                  radius='xs'
                >
                  {title}
                </Badge>
                <Flex
                  gap='md'
                  justify='flex-start'
                  align='flex-start'
                  direction='row'
                  wrap='wrap'
                >
                  {detail.map((item) => (
                    <div key={item} className={style.text}>
                      <Badge
                        classNames={{ root: style.root }}
                        key={item}
                        color='#999999'
                        variant='light'
                        size='lg'
                        radius='xs'
                      >
                        {item}
                      </Badge>
                    </div>
                  ))}
                </Flex>
              </Animation>
            </Box>
          ))}
        </div>
      </div>
    </SectionItem>
  );
};

export default MySkills;
