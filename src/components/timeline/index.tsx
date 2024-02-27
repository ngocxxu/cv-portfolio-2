import { Timeline } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";

type TTimelineCustom = {
  body: {
    time: "";
    company: "";
    position: "";
    description: "";
  }[];
};

export const TimelineCustom = ({ body }: TTimelineCustom) => {
  return (
    <Timeline
      color="gray"
      active={3}
      reverseActive
      lineWidth={1}
      bulletSize={18}
    >
      {body.map(({ company, position }) => (
        <Timeline.Item
          key={company}
          bullet={<IconGitBranch size={12} />}
          title={position}
        >
          {company}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
