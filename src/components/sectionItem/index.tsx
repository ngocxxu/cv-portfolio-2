import { Badge, Container } from "@mantine/core";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../context";
import style from "./style.module.css";
import { useInView } from "framer-motion";
import { Animation } from "../animation";
import { hiddenVisible } from "../../utils/animation";

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
          <Animation width="100%" variants={hiddenVisible}>
            <Badge
              leftSection={icon}
              className={style.badge}
              variant="outline"
              size="xl"
            >
              {title}
            </Badge>
          </Animation>
          <div ref={ref}>{children}</div>
        </div>
      </Container>
    </section>
  );
};
