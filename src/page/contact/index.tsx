import { Button, Flex, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail, IconSend } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import { DataUser } from "../../data";
import style from "./style.module.css";

const Contact = () => {
  const form = useForm({
    initialValues: { name: "", email: "", message: "", subject: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      subject: (value) =>
        value.length < 2 ? "Subject must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <SectionItem
      title="Contact"
      icon={<IconMail size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <div className={style.bigText}>
        Let's Work <span>Together!</span>
      </div>
      <Text size="1.3rem" color="#fff">
        {DataUser.home.mail}
      </Text>
      <form onSubmit={form.onSubmit(console.log)}>
        <Flex
          my={50}
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <TextInput
            classNames={{ input: style.input, label: style.label }}
            variant="unstyled"
            withAsterisk
            w="49%"
            label="FULL NAME"
            placeholder="Your full name"
            {...form.getInputProps("name")}
          />
          <TextInput
            classNames={{ input: style.input, label: style.label }}
            variant="unstyled"
            withAsterisk
            w="49%"
            label="EMAIL"
            placeholder="Your email address"
            {...form.getInputProps("email")}
          />
        </Flex>

        <Flex
          my={50}
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <TextInput
            classNames={{ input: style.input, label: style.label }}
            variant="unstyled"
            w="49%"
            label="PHONE (OPTIONAL)"
            placeholder="Your phone number"
            {...form.getInputProps("phone")}
          />
          <TextInput
            classNames={{ input: style.input, label: style.label }}
            variant="unstyled"
            withAsterisk
            w="49%"
            label="SUBJECT"
            placeholder="Your subject"
            {...form.getInputProps("subject")}
          />
        </Flex>

        <Textarea
          resize="vertical"
          classNames={{ input: style.input, label: style.label }}
          variant="unstyled"
          radius="xs"
          label="MESSAGE"
          placeholder="Write your message here ..."
          {...form.getInputProps("message")}
        />

        <Button
          mt={40}
          type="submit"
          leftSection={<IconSend />}
          className={style.themeBtn}
          variant="filled"
          size="lg"
          radius="xl"
        >
          SEND MESSAGE
        </Button>
      </form>
    </SectionItem>
  );
};

export default Contact;
