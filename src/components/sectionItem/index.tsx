import { Badge, Container } from "@mantine/core";
import { ReactNode, useContext, useEffect, useRef } from "react";
// import { useInView } from "../../assets/hooks/useInView";
import { GlobalContext } from "../../context";
import style from "./style.module.css";
import { useInView } from "framer-motion";

type TSectionItemProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export const SectionItem = ({ children, title, icon }: TSectionItemProps) => {
  const state = useContext(GlobalContext);
  const ref = useRef<HTMLDivElement>(null);
  const isIntersect = useInView(ref);

  useEffect(() => {
    if (isIntersect && state) {
      state.setViewPortState({ id: title, isView: isIntersect });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect]);

  return (
    <section id={title} className={style.section}>
      <Container size="lg">
        <div className={style.content}>
          <Badge
            ref={ref}
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
