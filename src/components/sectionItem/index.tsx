import { Container } from "@mantine/core";
import { ReactNode } from "react";
import style from "./style.module.css";

type TSectionItemProps = {
  children: ReactNode;
};

export const SectionItem = ({ children }: TSectionItemProps) => {
  return (
    <section className={style.section}>
      <Container size="lg">
        <div className={style.content}>{children}</div>
      </Container>
    </section>
  );
};
