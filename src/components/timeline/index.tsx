import { Badge, Collapse, Group, Timeline } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronUp, IconEye } from "@tabler/icons-react";
import style from "./style.module.css";

type TTimelineCustom = {
  body: {
    time: string;
    company: string;
    position: string;
    description: string[];
  }[];
};

// type TOnCollapse = {
//   company: string;
//   isExist?: TDataCollapse;
//   isOpen: boolean;
// };

// type TDataCollapse = { id: string; isOpen: boolean };

export const TimelineCustom = ({ body }: TTimelineCustom) => {
  const [opened, { toggle }] = useDisclosure(false);
  // const [dataCollapse, setDataCollapse] = useState<TDataCollapse[]>([
  //   {
  //     id: "",
  //     isOpen: false,
  //   },
  // ]);

  // const onCollapse = ({ company, isExist, isOpen }: TOnCollapse) => {
  //   if (isExist) {
  //     setDataCollapse(dataCollapse.filter((item) => item.id !== company));
  //   } else {
  //     setDataCollapse((old) => [
  //       ...old,
  //       {
  //         id: company,
  //         isOpen: isOpen,
  //       },
  //     ]);
  //   }
  // };

  // useEffect(() => {
  //   if (opened) {
  //     onCollapse({
  //       isOpen: opened,
  //     });
  //   }
  // }, []);

  return (
    <Timeline active={3} reverseActive lineWidth={1} bulletSize={18}>
      {body.map(({ company, position, time, description }) => {
        // const isExist = dataCollapse.find((item) => item.id === company);

        return (
          <Timeline.Item
            key={company}
            bullet={<IconChevronUp size="1rem" />}
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
                }}
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
