import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";

interface PointerEvent {
  clientX: number;
  clientY: number;
}

export const MousePointer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      const element = ref.current;
      // calculate x and y coordinates
      const x = clientX - element!.offsetLeft - element!.offsetWidth / 2;
      const y = clientY - element!.offsetTop - element!.offsetHeight / 2;
      // update state
      setCoordinates({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={style.circle}
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: "spring",
      }}
    />
  );
};
