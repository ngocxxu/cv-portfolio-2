import { Box, Group, Stack, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { CarouselCustom } from "../../components/carousel";
import { SectionItem } from "../../components/sectionItem";
import { IconLeftQuote } from "../../components/svg/IconLeftQuote";
import { IconRightQuote } from "../../components/svg/IconRightQuote";
import { vars } from "../../main";
import style from "./style.module.css";
import { useMemo } from "react";
import { DataUser } from "../../data";

const Testimonial = () => {
  const body = useMemo(
    () =>
      DataUser.testiminial.quotes.map(({ author, content, id }) => ({
        slide: 1,
        contents: (
          <Box key={id} className={style.box} p={30} px={60}>
            <Stack align="center">
              <IconLeftQuote
                className={style.icon1}
                fill={vars.colors.primaryColors[9]}
              />
              <Text size="22px" my="md">
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
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
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
    </SectionItem>
  );
};

export default Testimonial;
