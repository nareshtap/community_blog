import Post from './components/post/Post';
import styles from './App.module.scss'
const App = () => {

  return (
    <div className={styles.mainApp}>
      <Post />
    </div>
  );
};

export default App;
