import { useScroll, useTransform, motion } from 'framer-motion';
import { Area } from '../../components/area';
import { LeftSidebar } from '../../components/leftSidebar';
import { MiniRightSideBar } from '../../components/miniRightSideBar';
import { RightSidebar } from '../../components/rightSidebar';
import About from '../about';
import Contact from '../contact';
import Home from '../home';
import MySkills from '../mySkills';
import Portfolio from '../portfolio';
import Resume from '../resume';
import Testimonial from '../testimonial';
import { useRef } from 'react';

const StackedCards = ({ cards }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: `${cards.length * 100}vh` }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          content={card}
          progress={scrollYProgress}
          index={index}
          total={cards.length}
        />
      ))}
    </div>
  );
};

const Card = ({ content, progress, index, total }) => {
  const yRange = [index / total, (index + 1) / total];
  const opacity = useTransform(progress, yRange, [0, 1]);
  const y = useTransform(progress, yRange, ['100%', '0%']);

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `calc(30% + ${index * 30}px)`,
        left: '30%',
        transform: 'translate(-50%, -50%)',
        opacity,
        y,
        zIndex: index + 1,
        scale: index / 20 + 1,
        maxWidth: '1035px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div
        style={{
          background: `hsl(${index * 60}, 80%, 80%)`,
          borderRadius: '30px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          maxWidth: '770px',
          height: '410px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '2rem',
        }}
      >
        {content}
      </div>
    </motion.div>
  );
};

export const ContainerPage = () => {
  const cards = [
    'Card 1 Content',
    'Card 2 Content',
    'Card 3 Content',
    'Card 4 Content',
    'Card 5 Content',
  ];

  return (
    <>
      <Area />
      <MiniRightSideBar />
      <LeftSidebar />
      <Home />
      <About />
      <Resume />
      <MySkills />
      <StackedCards cards={cards} />
      <Portfolio />
      <Testimonial />
      <Contact />
      <RightSidebar />
    </>
  );
};
