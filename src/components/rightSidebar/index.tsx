import { Tooltip } from "@mantine/core";
import {
  IconBriefcase,
  IconCategory,
  IconHome,
  IconMail,
  IconMessage,
  IconTriangleSquareCircle,
  IconUser,
} from "@tabler/icons-react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { vars } from "../../main";
import style from "./style.module.css";
import { onClickHeaderItem } from "../../utils/helpers";

const data = [
  {
    icon: <IconHome />,
    title: "Introduce",
  },
  {
    icon: <IconUser />,
    title: "About",
  },
  {
    icon: <IconBriefcase />,
    title: "Resume",
  },
  // {
  //   icon: <IconAlignBoxRightStretch />,
  //   title: "Services",
  // },
  {
    icon: <IconTriangleSquareCircle />,
    title: "My Skills",
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
  const state = useContext(GlobalContext);

  return (
    <div className={style.rightSidebar}>
      {data.map(({ icon, title }) => {
        const isColor =
          state?.viewPortState.isView && state.viewPortState.id === title;

        return (
          <Tooltip
            key={title}
            classNames={{ tooltip: style.toolTip }}
            withArrow
            arrowPosition="side"
            position="left"
            label={title}
            transitionProps={{ duration: 300, transition: "rotate-left" }}
          >
            <div
              style={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                color: isColor && (vars.colors.primaryColors[9] as any),
              }}
              className={style.icon}
              onClick={() => onClickHeaderItem(title)}
            >
              {icon}
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};
