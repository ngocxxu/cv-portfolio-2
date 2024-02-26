import { ActionIcon, Button, Group } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { format } from "date-fns";
import Me from "../../assets/logo/me.jpg";
import { DataUser } from "../../data";
import style from "./style.module.css";

const social = [
  {
    icon: <IconBrandLinkedin />,
    link: "https://www.linkedin.com/in/ngoc-quach-17397620a/",
    color: "",
  },
  { icon: <IconBrandGithub />, link: "https://github.com/ngocxxu" },
  {
    icon: <IconBrandFacebook />,
    link: "https://www.facebook.com/ngocquach97",
  },
];

export const LeftSidebar = () => {
  return (
    <div className={style.leftSidebar}>
      <Group justify="space-between" mb="65px">
        <span className={style.name}>{DataUser.home.name}</span>
        <span className={style.jobTitle}>{DataUser.home.jobTitle}</span>
      </Group>
      <img src={Me} alt="me" className={style.image} />
      <h3 className={style.info}>{DataUser.home.mail}</h3>
      <h3 className={style.info}>{DataUser.home.address}</h3>
      <p className={style.copyRight}>
        © {format(new Date(), "yyyy")} {DataUser.home.enName}. All Rights
        Reserved
      </p>
      <div className={style.list}>
        {social.map(({ link, icon }) => (
          <ActionIcon
            classNames={{ root: style.actionIcon }}
            color="gray"
            key={link}
            component="a"
            href={link}
            size="xl"
            aria-label="Open in a new tab"
            onClick={(event) => event.preventDefault()}
            variant="outline"
            radius="xl"
          >
            {icon}
          </ActionIcon>
        ))}
      </div>
      <Button
        leftSection={<IconMail />}
        className={style.themeBtn}
        variant="filled"
        size="lg"
        radius="xl"
      >
        HIRE ME!
      </Button>
    </div>
  );
};
