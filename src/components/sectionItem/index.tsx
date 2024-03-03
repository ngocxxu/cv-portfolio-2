import { Badge, Container } from "@mantine/core";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../context";
import style from "./style.module.css";

type TSectionItemProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export const SectionItem = ({ children, title, icon }: TSectionItemProps) => {
  const state = useContext(GlobalContext);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // create and do action when intersecting is true
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && state) {
          if (!sectionRef.current) return;
          state.setViewPortState({ id: title, isView: entry.isIntersecting });
        }
      });
    };

    // threshold config height toggled for viewport
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

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
          <div ref={sectionRef}>{children}</div>
        </div>
      </Container>
    </section>
  );
};
