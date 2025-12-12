import { SectionContent, ContentText, ContentList, CodeBlock } from '../components/SectionContent';

interface Part4ContentProps {
  activeSection: string;
}

export const Part4Content = ({ activeSection }: Part4ContentProps) => {
  switch (activeSection) {
    case '1':
      return (
        <SectionContent title="Infrastructure Setup">
          <ContentText>Infrastructure components:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Kubernetes:</strong> Lightweight k3s distribution for VPS deployment',
                '<strong>Helm Charts:</strong> Package management for Kubernetes deployments',
                '<strong>PostgreSQL:</strong> Bitnami Helm chart for database',
                '<strong>Redis:</strong> Bitnami Helm chart for caching',
                '<strong>Cloudflare:</strong> DNS and proxy service for routing traffic to VPS',
                '<strong>Docker:</strong> Containerization for applications',
                '<strong>Custom Domain:</strong> Self-registered domain configured with Cloudflare',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '2':
      return (
        <SectionContent title="Deployment Architecture">
          <ContentText>Deployment structure:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Backend Service (vocab-be):</strong> NestJS API in Kubernetes pod',
                '<strong>Frontend Service (vocab-fe):</strong> Next.js app in Kubernetes pod',
                '<strong>Database:</strong> PostgreSQL in separate namespace',
                '<strong>Cache:</strong> Redis in separate namespace',
                '<strong>Routing:</strong> Cloudflare proxy routes traffic from custom domain to VPS',
                '<strong>Secrets:</strong> SOPS-encrypted configuration files',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '3':
      return (
        <SectionContent title="CI/CD Pipelines">
          <ContentText>Continuous Integration and Deployment:</ContentText>
          <CodeBlock title="GitHub Actions Workflow:">
            <ContentList
              items={[
                'Code push triggers workflow',
                'Run tests and linting',
                'Build Docker images',
                'Push images to container registry',
                'Deploy to k3s cluster using Helm',
                'Run database migrations',
                'Health check verification',
              ]}
            />
          </CodeBlock>
        </SectionContent>
      );
    case '4':
      return (
        <SectionContent title="Monitoring and Logging">
          <ContentText>Monitoring and logging setup:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>Cluster Monitoring:</strong> Lens IDE for visualizing and monitoring k3s cluster',
                '<strong>Metrics Server:</strong> Kubernetes metrics-server for collecting resource usage metrics (CPU, memory)',
                '<strong>Health Checks:</strong> HTTP endpoints for service health verification',
                '<strong>Application Logging:</strong> Structured logging with Winston/LoggerService',
                '<strong>Error Tracking:</strong> Sentry integration for error monitoring',
                '<strong>Performance Monitoring:</strong> API response time tracking',
                '<strong>Log Aggregation:</strong> Centralized log collection and analysis',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '5':
      return (
        <SectionContent title="Configuration Management">
          <ContentText>Configuration management approach:</ContentText>
          <CodeBlock>
            <ContentList
              items={[
                '<strong>SOPS Encryption:</strong> Encrypt sensitive configuration files before committing',
                '<strong>Helm Values:</strong> Environment-specific configuration in values.yaml',
                '<strong>Environment Variables:</strong> Runtime configuration via env vars',
                '<strong>Secrets Management:</strong> k3s secrets for sensitive data',
                '<strong>ConfigMaps:</strong> Non-sensitive configuration data',
                '<strong>Version Control:</strong> Configuration files in Git with encryption',
              ]}
              withStrong
            />
          </CodeBlock>
        </SectionContent>
      );
    case '6':
      return (
        <SectionContent title="Backup and Disaster Recovery">
          <ContentText>Backup and recovery strategies:</ContentText>
          <ContentList
            items={[
              '<strong>Database Backups:</strong> Automated PostgreSQL backups with retention policy',
              '<strong>Secret Backups:</strong> SOPS-encrypted secrets stored in version control',
              '<strong>Recovery Procedures:</strong> Documented steps for disaster recovery',
              '<strong>Data Retention:</strong> Configurable retention periods for backups',
              '<strong>Point-in-Time Recovery:</strong> Database transaction log backups',
              '<strong>Testing:</strong> Regular backup restoration testing',
            ]}
            withStrong
          />
        </SectionContent>
      );
    default:
      return null;
  }
};


