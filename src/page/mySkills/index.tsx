import { Badge, Box, Flex } from "@mantine/core";
import {
  IconApps,
  IconBrandAdobe,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconCloud,
  IconCode,
  IconDeviceMobile,
  IconFrame,
  IconTriangleSquareCircle,
  IconWalk,
} from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";

const skills = [
  {
    icon: <IconBrandReact />,
    title: "ReactJS",
    detail: [
      "Router",
      "Redux-thunk/saga",
      "Hooks",
      "Styled Component",
      "Basic React Spring",
      "Formik/Yup",
      "React DnD",
    ],
  },
  {
    icon: <IconBrandNextjs />,
    title: "NextJS",
    detail: ["Router", "Data Fetching", "Vercel"],
  },
  {
    icon: <IconBrandNodejs />,
    title: "NodeJS",
    detail: ["MongoDB", "Mongoose", "ExpressJS"],
  },
  {
    icon: <IconCloud />,
    title: "Devops",
    detail: ["Docker", "Github Action (CI/CD)"],
  },
  {
    icon: <IconBrandJavascript />,
    title: "Javascript",
    detail: [
      "ES5/ES6",
      "JQuery",
      "Basic Lodash",
      "AJAX",
      "Axious",
      "RESTfull API",
    ],
  },
  {
    icon: <IconBrandMysql />,
    title: "SQL",
    detail: ["Basic SQL", "MySQL"],
  },
  {
    icon: <IconCode />,
    title: "Languages",
    detail: ["Java", "C#", "Python"],
  },
  {
    icon: <IconFrame />,
    title: "Framework",
    detail: ["Basic AngularJS", "Basic VueJS"],
  },
  {
    icon: <IconDeviceMobile />,
    title: "Mobile",
    detail: ["Basic React Native"],
  },
  {
    icon: <IconBrandHtml5 />,
    title: "HTML/CSS",
    detail: [
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "Tailwindcss",
      "Pug",
      "TinyMCE",
    ],
  },
  {
    icon: <IconApps />,
    title: "Others",
    detail: [
      "Ant Design",
      "Material UI",
      "Mantine",
      "Storybook",
      "AnimateCSS",
      "Shadcn",
    ],
  },
  {
    icon: <IconBrandAdobe />,
    title: "Design",
    detail: ["Adobe Illustrator", "Basic Adobe Photoshop", "Adobe XD", "Figma"],
  },
  {
    icon: <IconWalk />,
    title: "Soft Skill",
    detail: [
      "Presentation",
      "Teamwork",
      "Learning skills",
      "Self-motivation",
      "Creativity",
    ],
  },
];

const MySkills = () => {
  return (
    <SectionItem
      title="My Skills"
      icon={
        <IconTriangleSquareCircle
          size="0.9rem"
          style={{ marginRight: "5px" }}
        />
      }
    >
      <div className={style.bigText}>
        My <span>Advantage</span>
      </div>
      <div className={style.list}>
        <div className={style.item}>
          {skills.map(({ detail, icon, title }) => (
            <Box mb={30} key={title}>
              <Badge
                mb={15}
                leftSection={icon}
                variant="light"
                size="xl"
                radius="xs"
              >
                {title}
              </Badge>
              <Flex
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
              >
                {detail.map((item) => (
                  <div className={style.text}>
                    <Badge
                      classNames={{ root: style.root }}
                      key={item}
                      color="#999999"
                      variant="light"
                      size="lg"
                      radius="xs"
                    >
                      {item}
                    </Badge>
                  </div>
                ))}
              </Flex>
            </Box>
          ))}
        </div>
      </div>
    </SectionItem>
  );
};

export default MySkills;
