import { Box, Code, List, Paper, Text, Title } from '@mantine/core';
import style from '../style.module.css';

interface SectionContentProps {
  title: string;
  children: React.ReactNode;
}

export const SectionContent = ({ title, children }: SectionContentProps) => {
  return (
    <Box>
      <Title order={2} mb="md" className={style.sectionTitle}>
        {title}
      </Title>
      {children}
    </Box>
  );
};

interface ContentTextProps {
  children: React.ReactNode;
}

export const ContentText = ({ children }: ContentTextProps) => {
  return (
    <Text size="md" mb="lg" className={style.contentText}>
      {children}
    </Text>
  );
};

interface ContentListProps {
  items: string[];
  withStrong?: boolean;
}

export const ContentList = ({ items, withStrong = false }: ContentListProps) => {
  return (
    <List size="md" mb="lg" className={style.contentList}>
      {items.map((item, index) => (
        <List.Item key={index}>
          {withStrong ? (
            <span dangerouslySetInnerHTML={{ __html: item }} />
          ) : (
            item
          )}
        </List.Item>
      ))}
    </List>
  );
};

interface CodeBlockProps {
  title?: string;
  children: React.ReactNode;
}

export const CodeBlock = ({ title, children }: CodeBlockProps) => {
  return (
    <Paper p="md" mb="lg" className={style.codeBlock}>
      {title && (
        <Text size="sm" fw={600} mb="xs">
          {title}
        </Text>
      )}
      {children}
    </Paper>
  );
};

interface CodeExampleProps {
  code: string;
}

export const CodeExample = ({ code }: CodeExampleProps) => {
  return (
    <Code block className={style.code}>
      {code}
    </Code>
  );
};




