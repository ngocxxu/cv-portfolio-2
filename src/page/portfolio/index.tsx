import { Badge } from '@mantine/core';
import { IconCategory } from '@tabler/icons-react';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import {
  AnimationStackedCard,
  AnimationTitle,
} from '../../components/animation/stackedCard';
import { PortfolioSectionItem } from '../../components/portfolioSectionItem';
import portfolioSectionItemStyle from '../../components/portfolioSectionItem/style.module.css';
import { DataUser } from '../../data';
import style from './style.module.css';

const Portfolio = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  return (
    <PortfolioSectionItem title='Portfolio'>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: `${DataUser.portfolio.coding.length * 100}vh`,
        }}
      >
        <AnimationTitle
          className={style.bigText}
          progress={scrollYProgress}
        >
          <Badge
            leftSection={
              <IconCategory size='0.9rem' style={{ marginRight: '5px' }} />
            }
            className={portfolioSectionItemStyle.badge}
            variant='outline'
            size='xl'
          >
            Portfolio
          </Badge>
        </AnimationTitle>

        <AnimationTitle
          top='15%'
          className={style.bigText}
          progress={scrollYProgress}
        >
          Featured <span>Projects</span>
        </AnimationTitle>

        {DataUser.portfolio.coding.map((item, index) => (
          <AnimationStackedCard
            key={index}
            content={item}
            index={index}
            progress={scrollYProgress}
            total={DataUser.portfolio.coding.length}
          />
        ))}
      </div>
    </PortfolioSectionItem>
  );
};

export default Portfolio;
