import { Badge, Container } from "@mantine/core";
import { ReactNode } from "react";
import style from "./style.module.css";
import { IconHome } from "@tabler/icons-react";

type TSectionItemProps = {
  children: ReactNode;
};

export const SectionItem = ({ children }: TSectionItemProps) => {
  return (
    <section className={style.section}>
      <Container size="lg">
        <div className={style.content}>
          <Badge
            leftSection={<IconHome size="0.9rem" className={style.icon} />}
            className={style.badge}
            variant="outline"
            size="xl"
          >
            Introduce
          </Badge>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
};
