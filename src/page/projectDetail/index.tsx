import { useParams, useNavigate } from 'react-router-dom';
import { Container, Title, Button, Badge, Group } from '@mantine/core';
import { DataUser } from '../../data';
import style from './style.module.css';
import { VocabularyManagementDetail } from './VocabularyManagementDetail';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = DataUser.portfolio.coding.find((item) => {
    const slug = item.title.toLowerCase().replace(/\s+/g, '-');
    return slug === projectId;
  });

  if (!project) {
    return (
      <Container size="lg" className={style.container}>
        <Title order={1}>Project Not Found</Title>
        <Button onClick={() => navigate('/')} mt="md">
          Back to Home
        </Button>
      </Container>
    );
  }

  const { title, images, image, frontend, backend, demo, hashtag } =
    project;
  const displayImages = images && images.length > 0 ? images : [image];

  const isVocabularyManagement = projectId === 'vocabulary-management';

  if (isVocabularyManagement) {
    return (
      <VocabularyManagementDetail
        title={title}
        hashtag={hashtag}
        frontend={frontend}
        backend={backend}
        demo={demo}
      />
    );
  }

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

      <div className={style.imageGallery}>
        {displayImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} - Image ${index + 1}`}
            className={style.image}
          />
        ))}
      </div>

      <Group gap="md" mt="xl" className={style.links}>
        <Button
          onClick={() => window.open(frontend, '_blank')}
          variant="filled"
          radius="xl"
        >
          Frontend
        </Button>
        {backend && (
          <Button
            onClick={() => window.open(backend, '_blank')}
            variant="filled"
            radius="xl"
          >
            Backend
          </Button>
        )}
        <Button
          onClick={() => window.open(demo, '_blank')}
          variant="filled"
          radius="xl"
        >
          Demo
        </Button>
      </Group>
    </Container>
  );
};

export default ProjectDetail;
