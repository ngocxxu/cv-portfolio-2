import { Box, Group, Stack, Text } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";
import { useMemo } from "react";
import { CarouselCustom } from "../../components/carousel";
import { SectionItem } from "../../components/sectionItem";
import { IconLeftQuote } from "../../components/svg/IconLeftQuote";
import { IconRightQuote } from "../../components/svg/IconRightQuote";
import { DataUser } from "../../data";
import { vars } from "../../main";
import style from "./style.module.css";

const Testimonial = () => {
  const body = useMemo(
    () =>
      DataUser.testiminial.quotes.map(({ author, content, id }, index) => ({
        slide: index,
        contents: (
          <Box key={id} className={style.box} p={30} px={60} mr={10}>
            <Stack align="center">
              <IconLeftQuote
                className={style.icon1}
                fill={vars.colors.primaryColors[9]}
              />
              <Text color="#fff" size="22px" my="md">
                {content}
              </Text>
              <Group w="100%" justify="space-between">
                <Text
                  c="dimmed"
                  size="md"
                  style={{ lineHeight: 1, fontStyle: "italic" }}
                >
                  {author}
                </Text>
                <IconRightQuote fill={vars.colors.primaryColors[9]} />
              </Group>
            </Stack>
          </Box>
        ),
      })),
    []
  );

  return (
    <SectionItem
      title="Testimonial"
      icon={<IconMessage size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Quotes fuel my <span>inspiration</span>
      </div>

      <CarouselCustom
        classNameControl={style.control}
        classNameControls={style.controls}
        classNameRoot={style.root}
        body={body}
      />

      <iframe
        className={style.video}
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/F5-qkgfBeuU"
        title="Comfort Will Ruin Your Life"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </SectionItem>
  );
};

export default Testimonial;
