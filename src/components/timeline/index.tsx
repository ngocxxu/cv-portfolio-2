import { Badge, Collapse, Group, ScrollArea, Timeline } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import { vars } from '../../main';
import style from './style.module.css';
import { Animation } from '../animation';
import { hiddenVisible } from '../../utils/animation';

type TTimelineCustom = {
  body: {
    time: string;
    company: string;
    position: string;
    description: string[];
  }[];
};

type TDataCollapse = { id: string; isOpen: boolean };

export const TimelineCustom = ({ body }: TTimelineCustom) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { toggle }] = useDisclosure(false);
  const [dataCollapse, setDataCollapse] = useState<TDataCollapse[]>([]);

  return (
    <Timeline
      classNames={{
        itemBullet: style.bullet,
        root: style.timelineRoot,
        itemContent: style.timelineContentItem,
      }}
      active={3}
      reverseActive
      lineWidth={2}
      bulletSize={25}
      color='rgba(0, 231, 118, 0.3  )'
    >
      {body.map(({ company, position, time, description }) => {
        const isExist = dataCollapse.find((item) => item.id === company);

        return (
          <Animation
            key={company}
            variants={hiddenVisible}
          >
            <Timeline.Item title={<div className={style.time}>{time}</div>}>
              <h3>{position}</h3>
              <Group>
                <p>{company}</p>
                <Badge
                  color={
                    isExist?.isOpen
                      ? vars.colors.primaryColors[9]
                      : vars.colors.primaryColors[8]
                  }
                  classNames={{ root: style.badgeRoot }}
                  size='xs'
                  variant='transparent'
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
                  leftSection={<IconEye size='1rem' />}
                >
                  Detail
                </Badge>
              </Group>
              <Collapse
                in={(isExist?.isOpen ?? false) && isExist?.id === company}
                transitionDuration={700}
                transitionTimingFunction='linear'
              >
                <ScrollArea classNames={style} h={250}>
                  {description.map((item) => (
                    <div key={item} className={style.description}>
                      {item}
                    </div>
                  ))}
                </ScrollArea>
              </Collapse>
            </Timeline.Item>
          </Animation>
        );
      })}
    </Timeline>
  );
};
