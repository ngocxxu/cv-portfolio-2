import { ActionIcon, Button } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconId,
} from '@tabler/icons-react';
import { format } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { DataUser } from '../../data';
import style from './style.module.css';

const social = [
  {
    icon: <IconBrandLinkedin />,
    link: 'https://www.linkedin.com/in/ngoc-quach-phung-bao/',
    color: '',
  },
  { icon: <IconBrandGithub />, link: 'https://github.com/ngocxxu' },
  // {
  //   icon: <IconBrandFacebook />,
  //   link: 'https://www.facebook.com/ngocquach97',
  // },
];

export const LeftSidebar = () => {
  return (
    <div className={style.leftSidebar}>
      <div className={style.boxHeader}>
        <span className={style.name}>{DataUser.home.name}</span>
        <span className={style.jobTitle}>{DataUser.home.jobTitle}</span>
      </div>
      <LazyLoadImage
        alt='me'
        effect='blur'
        wrapperProps={{
          style: { transitionDelay: '1s' },
        }}
        className={style.image}
        src='https://res.cloudinary.com/ngocxxu/image/upload/v1764482728/CV/Gemini_Generated_Image_xk0onrxk0onrxk0o_kwbdqx.jpg'
      />
      <h3 className={style.email}>{DataUser.home.mail}</h3>
      <h3 className={style.address}>{DataUser.home.address}</h3>
      <p className={style.copyRight}>
        © {format(new Date(), 'yyyy')} {DataUser.home.enName}. All Rights
        Reserved
      </p>
      <div className={style.list}>
        {social.map(({ link, icon }) => (
          <ActionIcon
            classNames={{ root: style.actionIcon }}
            color='gray'
            key={link}
            size='xl'
            aria-label='Open in a new tab'
            onClick={() => window.open(link, '_blank')}
            variant='outline'
            radius='xl'
          >
            {icon}
          </ActionIcon>
        ))}
      </div>
      <Button
        onClick={() => window.open(DataUser.home.linkCV, '_blank')}
        leftSection={<IconId />}
        className={style.themeBtn}
        variant='filled'
        size='lg'
        radius='xl'
      >
        DETAIL CV
      </Button>
    </div>
  );
};
