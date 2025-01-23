// src/components/PostList/PostList.tsx
import React, { useState } from 'react';
import { blogData as initialBlogData } from '../../const/blogData';
import PostForm from '../postForm/PostForm';
import BlogHeader from '../blog/BlogHeader';
import BlogContent from '../blog/BlogContent';
import CommentSection from '../postComments/CommentSection';
import styles from './styles.module.scss';
import { BlogData, CommentType } from '../../utils/interfaces';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<BlogData[]>(initialBlogData);

  const addPost = (newPost: BlogData) => {
    setPosts([newPost, ...posts]);
  };

  const updatePostComments = (postId: number, newComments: CommentType[]) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: newComments }
        : post
    ));
  };

  return (
    <div>
      <PostForm addPost={addPost} />
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '4rem' }}>
          <BlogHeader
            title={post.title}
            author={post.author}
            date={post.date}
            readingTime={post.readingTime}
          />
          <div className={styles.imgWrap}>
            <img src='../src/assets/bg.jpg' alt='Post Image' />
          </div>
          <BlogContent content={post.content} />
          <CommentSection 
            comments={post.comments} 
            setComments={(newComments) => updatePostComments(post.id, newComments)}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
