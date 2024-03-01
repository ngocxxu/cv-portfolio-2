import { Carousel } from "@mantine/carousel";
import { ReactNode, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import style from "./style.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { vars } from "../../main";

type TCarouselCustom = {
  body: {
    slide: number;
    contents: ReactNode;
  }[];
  classNameControl?: string;
  classNameControls?: string;
  classNameRoot?: string;
};

export const CarouselCustom = ({
  body,
  classNameControl,
  classNameControls,
  classNameRoot,
}: TCarouselCustom) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      controlSize={14}
      loop
      classNames={{
        control: classNameControl,
        controls: classNameControls,
        root: classNameRoot,
      }}
      plugins={[autoplay.current]}
      dragFree
      slideGap="md"
      align="start"
      nextControlIcon={<IconChevronRight color={vars.colors.default} />}
      previousControlIcon={<IconChevronLeft color={vars.colors.default} />}
    >
      {body.map((item) => (
        <Carousel.Slide classNames={{ slide: style.slide }} key={item.slide}>
          {item.contents}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
