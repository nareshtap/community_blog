import React from "react";
import styles from "./styles.module.scss";
import { BlogHeaderProps } from "../../utils/interfaces";


const BlogHeader: React.FC<BlogHeaderProps> = ({ title, author, date, readingTime }) => (
  <header className={styles.header}>
    <h1>{title}</h1>
    <p>
      By <span className={styles.author}>{author}</span> on {date} · {readingTime}
    </p>
  </header>
);

export default BlogHeader;
