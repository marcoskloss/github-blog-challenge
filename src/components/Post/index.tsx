import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  postAsMarkdown: ReactNode;
  isPreviewMode: boolean;
};

function Post({ postAsMarkdown, isPreviewMode }: Props) {
  return (
    <div
      className={`${styles.postContainer} ${
        isPreviewMode && styles.previewMode
      }`}
    >
      {postAsMarkdown}
      <div className={styles.borderGlow} />
    </div>
  );
}

export default Post;
