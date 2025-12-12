import { Box } from '@mantine/core';
import style from './style.module.css';
import { Part1Content } from './parts/Part1Content';
import { Part2Content } from './parts/Part2Content';
import { Part3Content } from './parts/Part3Content';
import { Part4Content } from './parts/Part4Content';

interface VocabularyManagementDocsProps {
  activePart: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const VocabularyManagementDocs = ({
  activePart,
  activeSection,
}: VocabularyManagementDocsProps) => {
  const renderContent = () => {
    switch (activePart) {
      case 'part1':
        return <Part1Content activeSection={activeSection} />;
      case 'part2':
        return <Part2Content activeSection={activeSection} />;
      case 'part3':
        return <Part3Content activeSection={activeSection} />;
      case 'part4':
        return <Part4Content activeSection={activeSection} />;
      default:
        return null;
    }
  };

  return <Box className={style.docsContentWrapper}>{renderContent()}</Box>;
};


