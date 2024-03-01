import { Carousel } from "@mantine/carousel";
import { ReactNode, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import style from "./style.module.css";

type TCarouselCustom = {
  body: {
    slide: number;
    contents: ReactNode;
  }[];
};

export const CarouselCustom = ({ body }: TCarouselCustom) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      plugins={[autoplay.current]}
      // height={200}
      dragFree
      slideGap="md"
      align="start"
    >
      {body.map((item) => (
        <Carousel.Slide classNames={{ slide: style.slide }} key={item.slide}>
          {item.contents}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
