import { Box, Stack, Text } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';
import { useMemo } from 'react';
import { Animation } from '../../components/animation';
import { InfinityCarousel } from '../../components/animation/infinityCarousel';
import { SectionItem } from '../../components/sectionItem';
import { IconLeftQuote } from '../../components/svg/IconLeftQuote';
import { DataUser } from '../../data';
import { vars } from '../../main';
import { hiddenVisible } from '../../utils/animation';
import style from './style.module.css';

const Testimonial = () => {
  const body = useMemo(
    () =>
      DataUser.testiminial.quotes.map(({ author, content, id }, index) => ({
        slide: index,
        contents: (
          <Box key={id} className={style.box} py={60} px={60} mt={10} mr={10}>
            <Stack align='center'>
              <IconLeftQuote
                className={style.icon1}
                fill={vars.colors.primaryColors[9]}
              />
              <Text color='#fff' size='22px' mt='xs' mb='md'>
                {content}
              </Text>
              <Text
                mr='auto'
                c='dimmed'
                size='md'
                style={{ lineHeight: 1, fontStyle: 'italic' }}
              >
                {author}
              </Text>
            </Stack>
          </Box>
        ),
      })),
    []
  );

  const body2 = useMemo(
    () =>
      DataUser.testiminial.quotes_2.map(({ author, content, id }, index) => ({
        slide: index,
        contents: (
          <Box key={id} className={style.box} py={60} px={60} mt={10} mr={10}>
            <Stack align='center'>
              <IconLeftQuote
                className={style.icon1}
                fill={vars.colors.primaryColors[9]}
              />
              <Text color='#fff' size='22px' mt='xs' mb='md'>
                {content}
              </Text>
              <Text
                mr='auto'
                c='dimmed'
                size='md'
                style={{ lineHeight: 1, fontStyle: 'italic' }}
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
      title='Testimonial'
      icon={<IconMessage size='0.9rem' style={{ marginRight: '5px' }} />}
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          Quotes fuel my <span>inspiration</span>
        </div>
      </Animation>

      <InfinityCarousel isReverse>
        {[...body, ...body].map((item) => (
          <div key={item.slide}>{item.contents}</div>
        ))}
      </InfinityCarousel>

      <Box h={250} />

      <InfinityCarousel>
        {[...body2, ...body2].map((item) => (
          <div key={item.slide}>{item.contents}</div>
        ))}
      </InfinityCarousel>

      <Box h={200} />
    </SectionItem>
  );
};

export default Testimonial;
