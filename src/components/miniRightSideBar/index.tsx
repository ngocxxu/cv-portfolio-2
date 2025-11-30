import { Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBriefcase,
  IconCategory,
  IconHome,
  IconMail,
  IconTriangleSquareCircle,
  IconUser
} from "@tabler/icons-react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { vars } from "../../main";
import { onClickHeaderItem } from "../../utils/helpers";
import style from "./style.module.css";

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
  {
    icon: <IconTriangleSquareCircle />,
    title: "My Skills",
  },
  {
    icon: <IconCategory />,
    title: "Portfolio",
  },
  // {
  //   icon: <IconMessage />,
  //   title: "Testimonial",
  // },
  {
    icon: <IconMail />,
    title: "Contact",
  },
];

export const MiniRightSideBar = () => {
  const [opened, { toggle }] = useDisclosure();
  const state = useContext(GlobalContext);

  return (
    <>
      {state?.viewPortState.isView ? (
        <div className={style.rightSidebar}>
          <Menu
            onClose={toggle}
            shadow="md"
            position="bottom-end"
            transitionProps={{ duration: 300, transition: "pop" }}
          >
            <Menu.Target>
              <Burger
                color="#fff"
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
              />
            </Menu.Target>

            <Menu.Dropdown mt={10}>
              {data.map(({ icon, title }) => {
                const isColor =
                  state?.viewPortState.isView &&
                  state.viewPortState.id === title;

                return (
                  <Menu.Item
                    onClick={() => {
                      onClickHeaderItem(title);
                      toggle();
                    }}
                    key={title}
                    leftSection={icon}
                    style={{
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      color: isColor && (vars.colors.primaryColors[9] as any),
                    }}
                  >
                    {title}
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
