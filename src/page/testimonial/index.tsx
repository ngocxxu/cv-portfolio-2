import { AspectRatio, Box, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMessage } from "@tabler/icons-react";
import { useMemo } from "react";
import Hiking from "../../assets/projects/hiking.jpg";
import { CarouselCustom } from "../../components/carousel";
import { SectionItem } from "../../components/sectionItem";
import { IconLeftQuote } from "../../components/svg/IconLeftQuote";
import { DataUser } from "../../data";
import { vars } from "../../main";
import style from "./style.module.css";

const Testimonial = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
              <Text color="#fff" size="22px" mt="xs" mb="md">
                {content}
              </Text>
              <Text
                mr="auto"
                c="dimmed"
                size="md"
                style={{ lineHeight: 1, fontStyle: "italic" }}
              >
                {author}
              </Text>
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

      <AspectRatio onClick={open} ratio={16 / 9} mx="auto">
        <div className={style["video-play-button"]} onClick={open}>
          <span></span>
        </div>
        <img className={style.img} src={Hiking} alt="hiking" />
      </AspectRatio>

      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        withCloseButton={false}
        centered
      >
        <AspectRatio ratio={16 / 9}>
          <iframe
            className={style.video}
            src="https://www.youtube.com/embed/F5-qkgfBeuU"
            title="Comfort Will Ruin Your Life"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Modal>
    </SectionItem>
  );
};

export default Testimonial;
