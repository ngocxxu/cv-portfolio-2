import { Badge, Collapse, Group, Timeline } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEye } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import style from "./style.module.css";

type TTimelineCustom = {
  body: {
    time: string;
    company: string;
    position: string;
    description: string[];
  }[];
  icon: ReactNode;
};

type TDataCollapse = { id: string; isOpen: boolean };

export const TimelineCustom = ({ body, icon }: TTimelineCustom) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { toggle }] = useDisclosure(false);
  const [dataCollapse, setDataCollapse] = useState<TDataCollapse[]>([]);

  return (
    <Timeline active={3} reverseActive lineWidth={1} bulletSize={18}>
      {body.map(({ company, position, time, description }) => {
        const isExist = dataCollapse.find((item) => item.id === company);

        return (
          <Timeline.Item
            key={company}
            bullet={icon}
            title={<div className={style.time}>{time}</div>}
          >
            <h3>{position}</h3>
            <Group>
              <p>{company}</p>
              <Badge
                classNames={{ root: style.badgeRoot }}
                size="xs"
                variant="outline"
                onClick={() => {
                  toggle();
                  if (isExist) {
                    setDataCollapse(
                      dataCollapse.filter((item) => item.id !== company)
                    );
                  } else {
                    setDataCollapse((old) => [
                      ...old,
                      {
                        id: company,
                        isOpen: true,
                      },
                    ]);
                  }
                }}
                leftSection={<IconEye size="1rem" />}
              >
                View Detail
              </Badge>
            </Group>
            <Collapse
              in={(isExist?.isOpen ?? false) && isExist?.id === company}
              transitionDuration={700}
              transitionTimingFunction="linear"
            >
              {description.map((item) => (
                <div key={item} className={style.description}>
                  {item}
                </div>
              ))}
            </Collapse>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
