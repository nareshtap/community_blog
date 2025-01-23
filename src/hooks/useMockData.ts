import { useState, useCallback } from "react";
import { initialPosts, defaultComments } from "../const/postComments";
import { CommentType, PostType } from "../utils/interfaces";

const useMockData = () => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  const addPost = useCallback((newPost: { title: string; author: string; content: string }) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: Date.now(),
        title: newPost.title,
        author: newPost.author,
        content: newPost.content,
        date: new Date().toLocaleDateString(),
        readingTime: "2 min read", // Static value
        comments: defaultComments, // Default comments added here
      },
    ]);
  }, []);

  const addComment = useCallback(
    (postId: number, text: string, parentId?: number) => {
      const newComment: CommentType = { id: Date.now(), text, username: "User", replies: [] };

      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            if (parentId) {
              const addReply = (comments: CommentType[]): CommentType[] =>
                comments.map((comment) =>
                  comment.id === parentId
                    ? { ...comment, replies: [...comment.replies, newComment] }
                    : { ...comment, replies: addReply(comment.replies) }
                );

              return { ...post, comments: addReply(post.comments) };
            }

            return { ...post, comments: [...post.comments, newComment] };
          }

          return post;
        })
      );
    },
    []
  );

  return { posts, addPost, addComment };
};

export default useMockData;
