import React from "react";
import styles from "./styles.module.scss";

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => (
  <div
    className={styles.content}
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
);

export default BlogContent;
