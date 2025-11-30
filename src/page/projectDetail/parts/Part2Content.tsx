import { MermaidDiagram } from '../components/MermaidDiagram';
import { CodeBlock, CodeExample, ContentList, ContentText, SectionContent } from '../components/SectionContent';
import style from '../style.module.css';

const authFlowImage = '/userflows/Authentication Flow.png';
const csvFlowImage = '/userflows/CSV Import Flow.png';
const libraryFlowImage = '/userflows/Library Management Flow.png';
const vocabFlowImage = '/userflows/Vocabulary Management Flow.png';
const trainingFlowImage = '/userflows/Vocabulary Training Flow.png';

interface Part2ContentProps {
  activeSection: string;
}

export const Part2Content = ({ activeSection }: Part2ContentProps) => {
  switch (activeSection) {
    case '1':
      return (
        <SectionContent title="Frontend Architecture and Technology Stack">
          <ContentText>The frontend is built with modern web technologies:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Framework:</strong> Next.js 14+ with App Router',
                '<strong>Language:</strong> TypeScript for type safety',
                '<strong>Styling:</strong> Tailwind CSS for utility-first styling',
                '<strong>UI Components:</strong> Custom React components with Mantine UI',
                '<strong>State Management:</strong> React hooks and context API',
                '<strong>Routing:</strong> Next.js App Router with dynamic routes',
                '<strong>Authentication:</strong> Clerk for user authentication',
              ]}
              withStrong
            />
          </CodeBlock>
          <ContentText>
            The project follows a component-based architecture with clear separation of
            concerns, making it maintainable and scalable.
          </ContentText>
        </SectionContent>
      );
    case '2':
      return (
        <SectionContent title="UI/UX Components and Features">
          <ContentText>Key UI components and user interface features:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Vocabulary List View:</strong> Paginated table with search and filter capabilities',
                '<strong>Vocabulary Editor:</strong> Form-based interface for creating and editing vocabulary entries',
                '<strong>CSV Import Interface:</strong> File upload with progress tracking and error reporting',
                '<strong>Language Folder Management:</strong> Organize vocabulary into folders with color coding',
                '<strong>Subject/Category Management:</strong> Create and manage vocabulary categories',
                '<strong>Vocabulary Trainer:</strong> Interactive exam interface with multiple question types',
                '<strong>Search & Filter UI:</strong> Advanced filtering with real-time results',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '3': {
      return (
        <SectionContent title="User Workflows and Interactions">
          <ContentText>Primary user workflows:</ContentText>

          <div className={style.scrollableContainer} style={{ scrollbarWidth: 'thin' }}>

          <CodeBlock title="1. Authentication Flow">
            <MermaidDiagram imagePath={authFlowImage} alt="Authentication Flow" />
          </CodeBlock>

          <CodeBlock title="2. Vocabulary Management Flow">
            <MermaidDiagram imagePath={vocabFlowImage} alt="Vocabulary Management Flow" />
          </CodeBlock>

          <CodeBlock title="3. CSV Import Flow">
            <MermaidDiagram imagePath={csvFlowImage} alt="CSV Import Flow" />
          </CodeBlock>

          <CodeBlock title="4. Vocabulary Training Flow">
            <MermaidDiagram imagePath={trainingFlowImage} alt="Vocabulary Training Flow" />
          </CodeBlock>

          <CodeBlock title="5. Library Management Flow">
            <MermaidDiagram imagePath={libraryFlowImage} alt="Library Management Flow" />
          </CodeBlock>
          </div>
          
        </SectionContent>
      );
    }
    case '4':
      return (
        <SectionContent title="Frontend API Integration">
          <ContentText>
            The frontend communicates with the backend through REST API endpoints:
          </ContentText>
          <CodeBlock>
            <CodeExample
              code={`// Example API calls
GET /api/vocabs - List vocabularies
POST /api/vocabs - Create vocabulary
PUT /api/vocabs/:id - Update vocabulary
DELETE /api/vocabs/:id - Delete vocabulary
POST /api/vocabs/import/csv - Import CSV
GET /api/vocabs/export/csv - Export CSV`}
            />
          </CodeBlock>
          <ContentText>
            The frontend uses axios or fetch for HTTP requests, with proper error handling and
            loading states. Authentication is handled via JWT tokens stored securely.
          </ContentText>
        </SectionContent>
      );
    case '5':
      return (
        <SectionContent title="Frontend Deployment Configuration">
          <ContentText>Frontend deployment setup:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Build:</strong> Next.js production build with optimization',
                '<strong>Container:</strong> Docker containerization for consistent deployment',
                '<strong>Hosting:</strong> k3s deployment with Helm charts on VPS',
                '<strong>Environment Variables:</strong> API URLs, authentication keys, and feature flags',
                '<strong>CI/CD:</strong> GitHub Actions for automated build and deployment',
                '<strong>Domain:</strong> Custom domain with Cloudflare proxy to VPS',
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

