import { Typography } from '@mui/material';
import PostList from '../postList/PostList';
import styles from './styles.module.scss'

const Post = () => {
  return (
    <>
    <div className={styles.containerHeader}>
      <Typography variant='h2' >Community Blog</Typography>
    </div>
    <div className={styles.containerLarge}>
      <PostList />
    </div>
    </>
  );
};

export default Post;
