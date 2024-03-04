import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { hiddenVisible } from "../../utils/animation";
import style from "./style.module.css";

type TAnimation = {
  children: ReactNode;
  width?: "fit-content" | "100%";
  variants?: Variants;
};

export const Animation = ({
  children,
  width = "100%",
  variants = hiddenVisible,
}: TAnimation) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  // const slideControls = useAnimation();

  useEffect(() => {
    // fire animation
    if (isInView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref} style={{ width }} className={style.container}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: vars.colors.primaryColors[9],
          zIndex: 20,
        }}
      /> */}
    </div>
  );
};
