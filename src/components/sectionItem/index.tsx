import { Badge, Container } from "@mantine/core";
import { ReactNode } from "react";
import style from "./style.module.css";

type TSectionItemProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export const SectionItem = ({ children, title, icon }: TSectionItemProps) => {
  return (
    <section id={title} className={style.section}>
      <Container size="lg">
        <div className={style.content}>
          <Badge
            leftSection={icon}
            className={style.badge}
            variant="outline"
            size="xl"
          >
            {title}
          </Badge>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
};
