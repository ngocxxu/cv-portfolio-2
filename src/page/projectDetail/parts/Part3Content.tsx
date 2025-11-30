import { SectionContent, ContentText, ContentList, CodeBlock, CodeExample } from '../components/SectionContent';
import { MermaidDiagram } from '../components/MermaidDiagram';

const erdImage = '/userflows/ERD.png';

interface Part3ContentProps {
  activeSection: string;
}

export const Part3Content = ({ activeSection }: Part3ContentProps) => {
  switch (activeSection) {
    case '1':
      return (
        <SectionContent title="Backend Architecture and Design">
          <ContentText>The backend follows NestJS modular architecture:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Framework:</strong> NestJS with TypeScript',
                '<strong>ORM:</strong> Prisma for database access',
                '<strong>Modules:</strong> Vocab, Auth, Notification, AI, Language, etc.',
                '<strong>Layers:</strong> Controller → Service → Repository pattern',
                '<strong>Validation:</strong> DTOs with class-validator pipes',
                '<strong>Error Handling:</strong> Global exception filters',
                '<strong>Documentation:</strong> Swagger/OpenAPI for API docs',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '2':
      return (
        <SectionContent title="API Design and Endpoints">
          <ContentText>RESTful API endpoints for vocabulary management:</ContentText>
          <CodeBlock>
            <CodeExample
              code={`GET    /vocabs              - List vocabularies (paginated)
GET    /vocabs/:id          - Get vocabulary by ID
GET    /vocabs/random/:count - Get random vocabularies
POST   /vocabs              - Create vocabulary
POST   /vocabs/bulk/create   - Bulk create
PUT    /vocabs/:id          - Update vocabulary
DELETE /vocabs/:id          - Delete vocabulary
POST   /vocabs/bulk/delete   - Bulk delete
POST   /vocabs/import/csv    - Import from CSV
GET    /vocabs/export/csv    - Export to CSV`}
            />
          </CodeBlock>
          <ContentText>
            All endpoints support query parameters for filtering, pagination, and sorting.
            Responses follow consistent JSON format with proper error handling.
          </ContentText>
        </SectionContent>
      );
    case '3':
      return (
        <SectionContent title="Database Schema and Storage Design">
          <ContentText>PostgreSQL database schema with Prisma ORM:</ContentText>
          <CodeBlock title="Database Schema (ERD):">
            <MermaidDiagram imagePath={erdImage} alt="Database ERD Diagram" />
          </CodeBlock>
          <ContentText>
            Indexing strategy includes indexes on frequently queried fields like textSource,
            language codes, and timestamps. Unique constraints ensure data integrity.
          </ContentText>
        </SectionContent>
      );
    // case '4':
    //   return (
    //     <SectionContent title="Business Logic and Workflows">
    //       <ContentText>Core business logic workflows:</ContentText>
    //       <CodeBlock title="Vocabulary Creation:">
    //         <ContentList
    //           items={[
    //             '1. Validate input data',
    //             '2. Check for duplicates (same textSource + languages + folder)',
    //             '3. If textTargets empty, call AI service for translation',
    //             '4. Create vocab with nested textTargets',
    //             '5. Cache result in Redis',
    //             '6. Invalidate list caches',
    //           ]}
    //         />
    //       </CodeBlock>
    //       <CodeBlock title="CSV Import:">
    //         <ContentList
    //           items={[
    //             '1. Validate CSV headers',
    //             '2. Parse CSV rows',
    //             '3. Group by textSource',
    //             '4. Process in batches (20 items/batch)',
    //             '5. Handle duplicates and errors',
    //             '6. Return import summary',
    //           ]}
    //         />
    //       </CodeBlock>
    //     </SectionContent>
    //   );
    case '4':
      return (
        <SectionContent title="Integration with External Services">
          <ContentText>External service integrations:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Google Gemini AI:</strong> For automatic vocabulary translation with context-aware explanations and examples',
                '<strong>Redis:</strong> Caching layer for performance optimization, storing frequently accessed data',
                '<strong>Supabase:</strong> User authentication and management',
                '<strong>PostgreSQL:</strong> Primary database for persistent storage',
                '<strong>Server-Sent Events (SSE):</strong> Real-time notifications and updates',
                '<strong>WebSocket:</strong> For chat and live notifications',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '5':
      return (
        <SectionContent title="Security and Access Control">
          <ContentText>Security measures and access control:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Role-Based Access Control:</strong> ADMIN, STAFF, and CUSTOMER roles with different permission levels',
                '<strong>JWT Authentication:</strong> Secure token-based authentication',
                '<strong>Input Validation:</strong> DTO validation with class-validator to prevent malicious input',
                '<strong>SQL Injection Prevention:</strong> Prisma ORM parameterized queries',
                '<strong>CORS Configuration:</strong> Restricted cross-origin requests',
                '<strong>Rate Limiting:</strong> API rate limiting via Redis',
                '<strong>Audit Logging:</strong> Track all create, update, and delete operations',
                '<strong>User Data Isolation:</strong> Users can only access their own vocabulary data',
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

