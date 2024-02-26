import { Tooltip } from "@mantine/core";
import {
  IconAlignBoxRightStretch,
  IconBriefcase,
  IconCategory,
  IconHome,
  IconMail,
  IconMessage,
  IconTriangleSquareCircle,
  IconUser,
} from "@tabler/icons-react";
import style from "./style.module.css";

const data = [
  {
    icon: <IconHome />,
    title: "Home",
  },
  {
    icon: <IconUser />,
    title: "About",
  },
  {
    icon: <IconBriefcase />,
    title: "Resume",
  },
  {
    icon: <IconAlignBoxRightStretch />,
    title: "Services",
  },
  {
    icon: <IconTriangleSquareCircle />,
    title: "Skills",
  },
  {
    icon: <IconCategory />,
    title: "Portfolio",
  },
  {
    icon: <IconMessage />,
    title: "Testimonial",
  },
  {
    icon: <IconMail />,
    title: "Contact",
  },
];

export const RightSidebar = () => {
  return (
    <div className={style.rightSidebar}>
      {data.map(({ icon, title }) => (
        <Tooltip
          key={title}
          classNames={{ tooltip: style.toolTip }}
          withArrow
          arrowPosition="side"
          position="left"
          label={title}
          transitionProps={{ duration: 300, transition: "rotate-left" }}
        >
          <div className={style.icon}>{icon}</div>
        </Tooltip>
      ))}
    </div>
  );
};
