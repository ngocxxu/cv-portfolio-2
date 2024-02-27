import { Badge, Collapse, Group, Timeline } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEye, IconGitBranch } from "@tabler/icons-react";
import style from "./style.module.css";

type TTimelineCustom = {
  body: {
    time: string;
    company: string;
    position: string;
    description: string[];
  }[];
};

export const TimelineCustom = ({ body }: TTimelineCustom) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Timeline active={3} reverseActive lineWidth={1} bulletSize={18}>
      {body.map(({ company, position, time, description }) => (
        <Timeline.Item
          key={company}
          bullet={<IconGitBranch size={12} />}
          title={<div className={style.time}>{time}</div>}
        >
          <h3>{position}</h3>
          <Group>
            <p>{company}</p>
            <Badge
              classNames={{ root: style.badgeRoot }}
              size="xs"
              variant="outline"
              onClick={toggle}
              leftSection={<IconEye size="1rem" />}
            >
              View Detail
            </Badge>
          </Group>
          <Collapse
            in={opened}
            transitionDuration={1000}
            transitionTimingFunction="linear"
          >
            {description.map((item) => (
              <div className={style.description}>{item}</div>
            ))}
          </Collapse>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
