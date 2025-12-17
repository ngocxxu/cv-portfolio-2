import { SectionContent, ContentText, ContentList, CodeBlock } from '../components/SectionContent';

interface Part1ContentProps {
  activeSection: string;
}

export const Part1Content = ({ activeSection }: Part1ContentProps) => {
  switch (activeSection) {
    case '1':
      return (
        <SectionContent title="Introduction to Vocabulary Management">
          <ContentText>
            Vocabulary Management is a comprehensive system designed to help users organize,
            manage, and learn vocabulary across multiple languages. The system provides tools
            for creating, storing, and practicing vocabulary with support for multiple
            languages, categories, and AI-powered translation.
          </ContentText>
          <ContentText>The system enables users to:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                'Organize vocabulary by languages and categories',
                'Import/export vocabulary via CSV files',
                'Utilize AI-powered translation for quick vocabulary creation',
                'Practice vocabulary through interactive training sessions',
                'Search and filter vocabulary efficiently',
              ]}
            />
          </CodeBlock>
        </SectionContent>
      );
    case '2':
      return (
        <SectionContent title="System Overview and Architecture">
          <ContentText>
            The Vocabulary Management system follows a modern microservices architecture with
            clear separation between frontend, backend, and infrastructure layers.
          </ContentText>
          <CodeBlock title="Architecture Components:">
            <ContentList
              items={[
                '<strong>Frontend:</strong> Next.js with React, TypeScript, and Tailwind CSS',
                '<strong>Backend:</strong> NestJS REST API with Prisma ORM',
                '<strong>Database:</strong> PostgreSQL for persistent storage',
                '<strong>Cache:</strong> Redis for performance optimization',
                '<strong>AI Service:</strong> Google Gemini API for translation',
                '<strong>Infrastructure:</strong> k3s (lightweight Kubernetes) with Helm charts',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '3':
      return (
        <SectionContent title="Use Cases and Business Requirements">
          <ContentText>The system addresses various use cases for vocabulary management:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>CRUD Operations:</strong> Create, read, update, and delete vocabulary entries with full validation',
                '<strong>Multi-language Support:</strong> Manage vocabulary pairs between any two languages',
                '<strong>CSV Import/Export:</strong> Bulk import vocabulary from CSV files and export existing data',
                '<strong>AI Translation:</strong> Automatically generate translations, explanations, and examples using AI',
                '<strong>Vocabulary Training:</strong> Interactive practice sessions with multiple question types',
                '<strong>Organization:</strong> Organize vocabulary using folders, subjects, and categories',
                '<strong>Search & Filter:</strong> Advanced search and filtering capabilities',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '4':
      return (
        <SectionContent title="Domain Model and Data Structure">
          <ContentText>
            The domain model consists of core entities and their relationships:
          </ContentText>
          <CodeBlock title="Core Entities:">
            <ContentList
              items={[
                '<strong>Vocab:</strong> Main vocabulary entity with source text and language pair',
                '<strong>TextTarget:</strong> Translation/definition with word type, grammar, and explanations',
                '<strong>Language:</strong> Language codes and names',
                '<strong>LanguageFolder:</strong> User-organized vocabulary folders',
                '<strong>Subject:</strong> User-defined categories/tags',
                '<strong>WordType:</strong> Part of speech classification',
                '<strong>VocabExample:</strong> Usage examples for vocabulary',
              ]}
              withStrong
            />
          </CodeBlock>
          <ContentText>
            Relationships: Vocab has many TextTargets, TextTargets belong to Subjects
            (many-to-many), and Vocabs are organized in LanguageFolders.
          </ContentText>
        </SectionContent>
      );
    case '5':
      return (
        <SectionContent title="Key Features and Capabilities">
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Multi-language Vocabulary Management:</strong> Support for any language pair with proper encoding',
              '<strong>AI-Powered Translation:</strong> Automatic translation with context-aware explanations',
              '<strong>Batch Operations:</strong> Bulk create, update, and delete operations',
              '<strong>CSV Import/Export:</strong> Seamless data migration and backup',
              '<strong>Vocabulary Training:</strong> Interactive practice with multiple choice, flip cards, and other question types',
              '<strong>Advanced Search:</strong> Filter by language, folder, subject, and text content',
              '<strong>Role-Based Access:</strong> ADMIN, STAFF, and CUSTOMER roles with appropriate permissions',
              '<strong>Real-time Updates:</strong> Server-Sent Events for live notifications',
              '<strong>High Performance:</strong> Redis caching for fast data retrieval',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    default:
      return null;
  }
};




