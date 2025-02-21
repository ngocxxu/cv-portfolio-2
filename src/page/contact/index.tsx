import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  Flex,
  Loader,
  LoadingOverlay,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconMail, IconSend } from '@tabler/icons-react';
import { useState } from 'react';
import { Animation } from '../../components/animation';
import { SectionItem } from '../../components/sectionItem';
import { DataUser } from '../../data';
import { hiddenVisible } from '../../utils/animation';
import style from './style.module.css';

type TFormInput = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const form = useForm({
    initialValues: { name: '', email: '', message: '', subject: '' },

    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      subject: (value) =>
        value.length < 2 ? 'Subject must have at least 2 letters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) =>
        value.length < 20 ? 'Message must have at least 20 letters' : null,
    },
  });

  const onSubmit = async (e: TFormInput) => {
    setVisible(true);

    const serviceId = 'service_aq7j1ud';
    const templateId = 'template_i9jmqsu';
    const publicKey = 'user_M6isEnD29CNuHp9due1g5';

    const templateParams = {
      from_name: e.name,
      from_email: e.email,
      to_name: 'Ngoc Quach',
      message: e.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      notifications.show({
        title: 'Success',
        message: 'Thank you for sending to me!',
      });
      setVisible(false);
      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.text);
      notifications.show({
        color: 'red',
        title: 'Error',
        message: error.text,
      });
      setVisible(false);
    }
  };

  return (
    <SectionItem
      title='Contact'
      icon={<IconMail size='0.9rem' style={{ marginRight: '5px' }} />}
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          Let's Work <span>Together!</span>
        </div>
      </Animation>

      <Box pos='relative'>
        <LoadingOverlay
          overlayProps={{
            radius: 'sm',
            blur: 2,
            bg: '#1f1f1f',
            opacity: 0.5,
          }}
          visible={visible}
          loaderProps={{ children: <Loader type='bars' /> }}
        />

        <Animation variants={hiddenVisible}>
          <Text size='1.3rem' color='#fff'>
            {DataUser.home.mail}
          </Text>
        </Animation>

        <form onSubmit={form.onSubmit(onSubmit)}>
          <Animation variants={hiddenVisible}>
            <Flex
              my={50}
              justify='space-between'
              align='center'
              direction='row'
              wrap='wrap'
            >
              <TextInput
                classNames={{ input: style.input, label: style.label }}
                variant='unstyled'
                withAsterisk
                w='49%'
                label='FULL NAME'
                placeholder='Your full name'
                {...form.getInputProps('name')}
              />
              <TextInput
                classNames={{ input: style.input, label: style.label }}
                variant='unstyled'
                withAsterisk
                w='49%'
                label='EMAIL'
                placeholder='Your email address'
                {...form.getInputProps('email')}
              />
            </Flex>
          </Animation>

          <Animation variants={hiddenVisible}>
            <Flex
              my={50}
              justify='space-between'
              align='center'
              direction='row'
              wrap='wrap'
            >
              <TextInput
                classNames={{ input: style.input, label: style.label }}
                variant='unstyled'
                w='49%'
                label='PHONE (OPTIONAL)'
                placeholder='Your phone number'
                {...form.getInputProps('phone')}
              />
              <TextInput
                classNames={{ input: style.input, label: style.label }}
                variant='unstyled'
                withAsterisk
                w='49%'
                label='SUBJECT'
                placeholder='Your subject'
                {...form.getInputProps('subject')}
              />
            </Flex>
          </Animation>

          <Animation variants={hiddenVisible}>
            <Textarea
              resize='vertical'
              classNames={{ input: style.input, label: style.label }}
              variant='unstyled'
              withAsterisk
              radius='xs'
              label='MESSAGE'
              placeholder='Write your message here ...'
              {...form.getInputProps('message')}
            />
            <Button
              mt={40}
              type='submit'
              leftSection={<IconSend />}
              className={style.themeBtn}
              variant='filled'
              size='lg'
              radius='xl'
            >
              SEND MESSAGE
            </Button>
          </Animation>
        </form>
      </Box>
    </SectionItem>
  );
};

export default Contact;
