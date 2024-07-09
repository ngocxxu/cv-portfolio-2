import { Badge, Box, Flex } from '@mantine/core';
import {
  IconApps,
  IconBrandAdobe,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandVite,
  IconCloud,
  IconCode,
  IconDeviceMobile,
  IconFrame,
  IconTriangleSquareCircle,
  IconWalk,
} from '@tabler/icons-react';
import { SectionItem } from '../../components/sectionItem';
import style from './style.module.css';
import { Animation } from '../../components/animation';
import { hiddenVisible, hiddenVisibleSkills } from '../../utils/animation';

const skills = [
  {
    icon: <IconBrandReact />,
    title: 'ReactJS',
    detail: [
      'Router',
      'Redux-thunk/saga',
      'Mobx',
      'Hooks',
      'Styled Component',
      'Formik/Yup',
      'React DnD',
      'Tanstack-Query',
      'Tanstack-Table',
    ],
  },
  {
    icon: <IconBrandNextjs />,
    title: 'NextJS',
    detail: ['Router', 'Data Fetching', 'Vercel'],
  },
  {
    icon: <IconBrandNodejs />,
    title: 'NodeJS',
    detail: ['MongoDB', 'Mongoose', 'ExpressJS'],
  },
  {
    icon: <IconCloud />,
    title: 'Devops',
    detail: ['Docker', 'Github Action (CI/CD)', 'Basic AWS(EC2, IAM,S3)'],
  },
  {
    icon: <IconBrandJavascript />,
    title: 'Javascript',
    detail: [
      'ES5/ES6',
      'JQuery',
      'Basic Lodash',
      'AJAX',
      'Axious',
      'RESTfull API',
    ],
  },
  {
    icon: <IconBrandMysql />,
    title: 'SQL',
    detail: ['Basic SQL', 'MySQL'],
  },
  {
    icon: <IconBrandVite />,
    title: 'Test',
    detail: ['Vitest'],
  },
  {
    icon: <IconCode />,
    title: 'Languages',
    detail: ['Java', 'C#', 'Python'],
  },
  {
    icon: <IconFrame />,
    title: 'Framework',
    detail: ['Basic AngularJS', 'Basic VueJS', 'Django'],
  },
  {
    icon: <IconDeviceMobile />,
    title: 'Mobile',
    detail: ['Basic React Native'],
  },
  {
    icon: <IconBrandHtml5 />,
    title: 'HTML/CSS',
    detail: [
      'HTML5',
      'CSS3',
      'SASS',
      'Bootstrap',
      'Tailwindcss',
      'Pug',
      'TinyMCE',
    ],
  },
  {
    icon: <IconApps />,
    title: 'Others',
    detail: [
      'Ant Design',
      'Material UI',
      'Mantine',
      'Storybook',
      'AnimateCSS',
      'Shadcn',
    ],
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
