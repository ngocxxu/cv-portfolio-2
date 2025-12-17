import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Text, Button, Badge, Group, Box } from '@mantine/core';
import { VocabularyManagementDocs } from './VocabularyManagementDocs';
import style from './style.module.css';

interface VocabularyManagementDetailProps {
  title: string;
  hashtag?: string[];
  frontend?: string;
  backend?: string;
  demo?: string;
}

export const VocabularyManagementDetail = ({
  title,
  hashtag,
}: VocabularyManagementDetailProps) => {
  const navigate = useNavigate();
  const [activePart, setActivePart] = useState<string>('part1');
  const [activeSection, setActiveSection] = useState<string>('1');

  return (
    <Container size="lg" className={style.container}>
      <Button
        variant="subtle"
        onClick={() => navigate('/')}
        className={style.backButton}
      >
        ← Back to Portfolio
      </Button>

      <Title order={1} className={style.title}>
        {title}
      </Title>

      {hashtag && hashtag.length > 0 && (
        <Group gap="xs" mb="xl">
          {hashtag.map((tag, index) => (
            <Badge key={index} variant="outline" size="lg">
              {tag}
            </Badge>
          ))}
        </Group>
      )}

      <Box className={style.docsContainer}>
        <Box className={style.docsContent}>
          <VocabularyManagementDocs
            activePart={activePart}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </Box>
        <Box className={style.docsTabs}>
          <Box className={style.parentTabsContainer}>
            <Text size="sm" fw={600} mb="md" className={style.tabsLabel}>
              Parts
            </Text>
            <Box
              className={style.tabsList}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.target as HTMLElement;
                const tab = target.closest('[data-part]');
                if (tab) {
                  const part = tab.getAttribute('data-part');
                  if (part) {
                    setActivePart(part);
                    setActiveSection('1');
                  }
                }
              }}
            >
              <Box
                data-part="part1"
                className={`${style.parentTab} ${activePart === 'part1' ? style.active : ''}`}
              >
                Part 1: Project Overview
              </Box>
              <Box
                data-part="part2"
                className={`${style.parentTab} ${activePart === 'part2' ? style.active : ''}`}
              >
                Part 2: Frontend
              </Box>
              <Box
                data-part="part3"
                className={`${style.parentTab} ${activePart === 'part3' ? style.active : ''}`}
              >
                Part 3: Backend
              </Box>
              <Box
                data-part="part4"
                className={`${style.parentTab} ${activePart === 'part4' ? style.active : ''}`}
              >
                Part 4: DevOps
              </Box>
            </Box>
          </Box>

          <Box className={style.childTabsContainer}>
            <Text size="sm" fw={600} mb="md" className={style.tabsLabel}>
              Sections
            </Text>
            <Box
              className={style.childTabsList}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.target as HTMLElement;
                const tab = target.closest('[data-section]');
                if (tab) {
                  const section = tab.getAttribute('data-section');
                  if (section) {
                    setActiveSection(section);
                  }
                }
              }}
            >
              {activePart === 'part1' && (
                <>
                  <Box
                    data-section="1"
                    className={`${style.childTab} ${activeSection === '1' ? style.active : ''}`}
                  >
                    1. Introduction
                  </Box>
                  <Box
                    data-section="2"
                    className={`${style.childTab} ${activeSection === '2' ? style.active : ''}`}
                  >
                    2. System Overview
                  </Box>
                  <Box
                    data-section="3"
                    className={`${style.childTab} ${activeSection === '3' ? style.active : ''}`}
                  >
                    3. Use Cases
                  </Box>
                  <Box
                    data-section="4"
                    className={`${style.childTab} ${activeSection === '4' ? style.active : ''}`}
                  >
                    4. Domain Model
                  </Box>
                  <Box
                    data-section="5"
                    className={`${style.childTab} ${activeSection === '5' ? style.active : ''}`}
                  >
                    5. Key Features
                  </Box>
                </>
              )}
              {activePart === 'part2' && (
                <>
                  <Box
                    data-section="1"
                    className={`${style.childTab} ${activeSection === '1' ? style.active : ''}`}
                  >
                    1. Architecture
                  </Box>
                  <Box
                    data-section="2"
                    className={`${style.childTab} ${activeSection === '2' ? style.active : ''}`}
                  >
                    2. UI/UX Components
                  </Box>
                  <Box
                    data-section="3"
                    className={`${style.childTab} ${activeSection === '3' ? style.active : ''}`}
                  >
                    3. User Workflows
                  </Box>
                  <Box
                    data-section="4"
                    className={`${style.childTab} ${activeSection === '4' ? style.active : ''}`}
                  >
                    4. API Integration
                  </Box>
                  <Box
                    data-section="5"
                    className={`${style.childTab} ${activeSection === '5' ? style.active : ''}`}
                  >
                    5. Deployment Config
                  </Box>
                </>
              )}
              {activePart === 'part3' && (
                <>
                  <Box
                    data-section="1"
                    className={`${style.childTab} ${activeSection === '1' ? style.active : ''}`}
                  >
                    1. Architecture
                  </Box>
                  <Box
                    data-section="2"
                    className={`${style.childTab} ${activeSection === '2' ? style.active : ''}`}
                  >
                    2. API Design
                  </Box>
                  <Box
                    data-section="3"
                    className={`${style.childTab} ${activeSection === '3' ? style.active : ''}`}
                  >
                    3. Database Schema
                  </Box>
                  {/* <Box
                    data-section="4"
                    className={`${style.childTab} ${activeSection === '4' ? style.active : ''}`}
                  >
                    4. Business Logic
                  </Box> */}
                  <Box
                    data-section="4"
                    className={`${style.childTab} ${activeSection === '4' ? style.active : ''}`}
                  >
                    4. External Services
                  </Box>
                  <Box
                    data-section="5"
                    className={`${style.childTab} ${activeSection === '5' ? style.active : ''}`}
                  >
                    5. Security
                  </Box>
                </>
              )}
              {activePart === 'part4' && (
                <>
                  <Box
                    data-section="1"
                    className={`${style.childTab} ${activeSection === '1' ? style.active : ''}`}
                  >
                    1. Infrastructure
                  </Box>
                  <Box
                    data-section="2"
                    className={`${style.childTab} ${activeSection === '2' ? style.active : ''}`}
                  >
                    2. Deployment
                  </Box>
                  <Box
                    data-section="3"
                    className={`${style.childTab} ${activeSection === '3' ? style.active : ''}`}
                  >
                    3. CI/CD
                  </Box>
                  <Box
                    data-section="4"
                    className={`${style.childTab} ${activeSection === '4' ? style.active : ''}`}
                  >
                    4. Monitoring
                  </Box>
                  <Box
                    data-section="5"
                    className={`${style.childTab} ${activeSection === '5' ? style.active : ''}`}
                  >
                    5. Configuration
                  </Box>
                  {/* <Box
                    data-section="6"
                    className={`${style.childTab} ${activeSection === '6' ? style.active : ''}`}
                  >
                    6. Backup & Recovery
                  </Box> */}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};




