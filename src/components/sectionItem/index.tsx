import { Badge, Container } from "@mantine/core";
import { useInViewport } from "@mantine/hooks";
import { ReactNode, useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import style from "./style.module.css";

type TSectionItemProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export const SectionItem = ({ children, title, icon }: TSectionItemProps) => {
  const state = useContext(GlobalContext);
  const { ref, inViewport } = useInViewport();

  useEffect(() => {
    if (inViewport && state) {
      state.setViewPortState({ id: title, isView: inViewport });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewport]);

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
          <div ref={ref}>{children}</div>
        </div>
      </Container>
    </section>
  );
};
