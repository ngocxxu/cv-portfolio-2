import { IconUser } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import style from "./style.module.css";
import { CarouselCustom } from "../../components/carousel";
import { Anchor, Avatar, Box, Group, Stack, Text } from "@mantine/core";

const body = [
  {
    slide: 1,
    contents: (
      <Box className={style.box} p={30} px={60}>
        <Group>
          <Avatar
            src={`https://i.pravatar.cc/150?u=a${Math.random()}`}
            radius="xl"
          />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor
              href="https://twitter.com/mantinedev"
              c="dimmed"
              size="xs"
              style={{ lineHeight: 1 }}
            >
              @mantinedev
            </Anchor>
          </Stack>
        </Group>
        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on
          usability, accessibility and developer experience
        </Text>
      </Box>
    ),
  },
];

const Testimonial = () => {
  return (
    <SectionItem
      title="Testimonial"
      icon={<IconUser size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Quotes fuel my <span>inspiration</span>
      </div>

      <CarouselCustom body={body} />
    </SectionItem>
  );
};

export default Testimonial;
