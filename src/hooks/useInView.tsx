import { useEffect, useRef, useState } from "react";

type TUseInView = {
  options?: IntersectionObserverInit;
};

export const useInView = ({
  options,
}: TUseInView): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersect, setisIntersect] = useState(false);
  useEffect(() => {
    // create and do action when intersecting is true
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setisIntersect(true);
        } else {
          setisIntersect(false);
        }
      });
    };

    // threshold config height toggled for viewport
    const observer = new IntersectionObserver(observerCallback, {
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isIntersect];
};
