import { Badge, Container } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
// import { useInView } from "../../assets/hooks/useInView";
// import { useInView } from "react-intersection-observer";
import { GlobalContext } from "../../context";
import style from "./style.module.css";
import { useInView } from "../../assets/hooks/useInView";

type TSectionItemProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0.5, transition: { duration: 1 } },
};

export const SectionItem = ({ children, title, icon }: TSectionItemProps) => {
  const state = useContext(GlobalContext);
  // const { ref, inViewport } = useInViewport();
  // const [ref, isIntersect] = useInView({});
  const [prevPosition, setPrevPosition] = useState(0);
  const reff = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  // const ref = useRef<HTMLDivElement>(null);
  // const [isIntersect, setIsIntersect] = useState(false);
  // useEffect(() => {
  //   // create and do action when intersecting is true
  //   const observerCallback = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting && state) {
  //         // setIsIntersect(true);
  //         state.setViewPortState({ id: title, isView: entry.isIntersecting });
  //       } else {
  //         // setIsIntersect(false);
  //       }
  //     });
  //   };

  //   // threshold config height toggled for viewport
  //   const observer = new IntersectionObserver(observerCallback, {
  //     root: null,
  //     // rootMargin: "0px",
  //     // threshold: 0.2,
  //   });

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, [title]);

  // useEffect(() => {
  //   console.log({ control });

  //   if (isIntersect && state) {
  //     control.start("visible");
  //     state.setViewPortState({ id: title, isView: isIntersect });
  //   } else {
  //     // control.start("hidden");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isIntersect]);

  const [ref, inView] = useInView({});
  console.log("1", prevPosition);

  useEffect(() => {
    console.log({ control });

    if (inView && state) {
      control.start("visible");
      state.setViewPortState({ id: title, isView: inView });
    } else {
      // control.start("hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const handleScroll = () => {
    if (!reff.current) return;

    const currentPosition = reff.current.getBoundingClientRect().top;
    console.log("2", currentPosition);

    if (currentPosition < prevPosition) {
      console.log("Scrolling up");
    }
    setPrevPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={title} className={style.section}>
      <Container size="lg">
        <div ref={reff} className={style.content}>
          <Badge
            ref={ref}
            leftSection={icon}
            className={style.badge}
            variant="outline"
            size="xl"
          >
            {title}
          </Badge>
          <motion.div
            // ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            {children}
          </motion.div>
          {/* {Children.map(children, (child, index) => (
            <motion.div
              className="box"
              ref={ref}
              initial="hidden"
              variants={boxVariant}
              animate={control}
            >{child}</motion.div>
          ))} */}
          {/* <motion.div initial="hidden" variants={boxVariant} animate={control}>
            {children}
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
};
