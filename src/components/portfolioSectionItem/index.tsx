import { Container } from '@mantine/core';
import { useInView } from 'framer-motion';
import { ReactNode, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context';
import style from './style.module.css';

type TPortfolioSectionItemProps = {
  children: ReactNode;
  title: string;
};

export const PortfolioSectionItem = ({
  children,
  title,
}: TPortfolioSectionItemProps) => {
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
      <Container size='lg'>
        <div className={style.content}>
          <div ref={ref}>{children}</div>
        </div>
      </Container>
    </section>
  );
};
