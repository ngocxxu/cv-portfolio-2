import style from './MermaidDiagram.module.css';

interface MermaidDiagramProps {
  imagePath: string;
  alt?: string;
}

export const MermaidDiagram = ({ imagePath, alt = 'User flow diagram' }: MermaidDiagramProps) => {
  const encodedPath = imagePath.split('/').map(segment => 
    segment.includes(' ') ? encodeURIComponent(segment) : segment
  ).join('/');

  return (
    <div className={style.diagramContainer} style={{ scrollbarWidth: 'thin' }}>
      <img
        src={encodedPath}
        alt={alt}
        className={style.diagramImage}
        onError={() => {
          console.error('Failed to load image:', encodedPath);
          console.error('Original path:', imagePath);
        }}
      />
    </div>
  );
};


