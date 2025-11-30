import { BackgroundImage, Button } from '@mantine/core';
import { motion, MotionValue, useTransform } from 'framer-motion';
import style from './style.module.css';
import { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';

type TAnimationStackedCard = {
  content: {
    demo: string;
    frontend: string;
    backend?: string;
    image: string;
    title: string;
    images?: string[];
  };
  progress: MotionValue<number>;
  index: number;
  total: number;
};

type TAnimationTitle = {
  className: string;
  progress: MotionValue<number>;
  children: ReactNode;
  top?: string;
};

export const AnimationTitle = ({
  progress,
  className,
  children,
  top = '5%',
}: TAnimationTitle) => {
  const opacity = useTransform(progress, [0, 0.1, 0.99, 1], [0, 1, 1, 0]);
  const y = useTransform(
    progress,
    [0, 0.1, 0.99, 1],
    ['50px', '0px', '0px', '-50px']
  );

  return (
    <motion.div
      className={className}
      style={{
        position: 'sticky',
        top,
        left: '50%',
        transform: 'translateX(-50%)',
        opacity,
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimationStackedCard = ({
  content,
  progress,
  index,
  total,
}: TAnimationStackedCard) => {
  const { demo, frontend, backend, image, title, images } = content;
  const navigate = useNavigate();
  const yRange = [index / total, (index + 1) / total];
  const opacity = useTransform(progress, yRange, [0, 1]);
  const y = useTransform(progress, yRange, ['100%', '0%']);
  const targetScale = 1 - (total - index) * 0.05;
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const hasImages = images && images.length > 0;

  const getProjectSlug = (projectTitle: string) => {
    return projectTitle.toLowerCase().replace(/\s+/g, '-');
  };

  const handleReadDetail = () => {
    const slug = getProjectSlug(title);
    navigate(`/read-detail/${slug}`);
  };

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `calc(25% + ${index * 30}px)`,
        left: '30%',
        transform: 'translate(-50%, -50%)',
        opacity,
        y,
        zIndex: index + 1,
        scale,
        maxWidth: '1050px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#1f1f1f',
      }}
    >
      {hasImages ? (
        <div className={style.inner}>
          <div className={style.carouselViewport} ref={emblaRef}>
            <div className={style.carouselContainer}>
              {images.map((img, imgIndex) => (
                <div key={imgIndex} className={style.carouselSlide}>
                  <img
                    src={img}
                    alt={`${title} - Image ${imgIndex + 1}`}
                    className={style.carouselImage}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={style.button}>
            <Button
              onClick={() => window.open(frontend, '_blank')}
              classNames={{ root: style.root }}
              variant='filled'
              radius='xl'
            >
              Frontend
            </Button>
            {backend && (
              <Button
                onClick={() => window.open(backend, '_blank')}
                classNames={{ root: style.root }}
                variant='filled'
                radius='xl'
              >
                Backend
              </Button>
            )}
            <Button
              onClick={() => window.open(demo, '_blank')}
              classNames={{ root: style.root }}
              variant='filled'
              radius='xl'
            >
              Demo
            </Button>
          </div>
        </div>
      ) : (
        <BackgroundImage
          src={image}
          radius='sm'
          classNames={{
            root: style.inner,
          }}
        >
          <div className={style.button}>
            <Button
              onClick={() => window.open(frontend, '_blank')}
              classNames={{ root: style.root }}
              variant='filled'
              radius='xl'
            >
              Frontend
            </Button>
            {backend && (
              <Button
                onClick={() => window.open(backend, '_blank')}
                classNames={{ root: style.root }}
                variant='filled'
                radius='xl'
              >
                Backend
              </Button>
            )}
            <Button
              onClick={() => window.open(demo, '_blank')}
              classNames={{ root: style.root }}
              variant='filled'
              radius='xl'
            >
              Demo
            </Button>
          </div>
        </BackgroundImage>
      )}
      <div className={style.titleContainer}>
        <h3 className={style.h3}>
          <span className={style.span}>{title}</span>
        </h3>
        <Button
          variant="outline"
          onClick={handleReadDetail}
          classNames={{ root: style.readDetailButton }}
          radius="xl"
        >
          READ DETAIL
        </Button>
      </div>
    </motion.div>
  );
};
