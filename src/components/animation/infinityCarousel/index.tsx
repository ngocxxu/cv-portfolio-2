import { animate, motion, useMotionValue } from 'framer-motion';
import style from './style.module.css';
import { ReactNode, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

type TInfinityCarouselProps = {
  children: ReactNode;
  isReverse?: boolean;
};

const FAST_DURATION = 40;
const SLOW_DURATION = 70;

export const InfinityCarousel = ({
  children,
  isReverse = false,
}: TInfinityCarouselProps) => {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const distance = width / 2 + 8;
    const startPosition = isReverse ? -distance : 0;
    const finalPosition = isReverse ? 0 : -distance;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration:
          duration *
          (Math.abs(xTranslation.get() - finalPosition) /
            Math.abs(startPosition - finalPosition)),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [startPosition, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender, xTranslation, duration, width, isReverse]);

  return (
    <motion.div
      className={style.container}
      style={{ x: xTranslation }}
      ref={ref}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {children}
    </motion.div>
  );
};
