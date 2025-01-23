import { useState } from "react";
import Comment from "../comment/Comment";
import styles from './styles.module.scss';
import { Typography } from "@mui/material";
import { CommentType } from "../../utils/interfaces";
import { usePaginatedView } from "../../hooks/usePaginatedView";

interface CommentSectionProps {
  comments: CommentType[];
  setComments: (comments: CommentType[]) => void;
}

export default function CommentSection({ comments, setComments }: CommentSectionProps) {
  const [commentInput, setCommentInput] = useState<string>("");

  const {
    visibleItems: visibleComments,
    hasMore,
    showMore,
    showLess,
  } = usePaginatedView(comments, 5);

  const createNewComment = (text: string): CommentType => ({
    id: Date.now(),
    username: "Current User",
    text,
    replies: [],
  });

  const addReply = (commentId: number, replyText: string) => {
    const reply = createNewComment(replyText);
    reply.parentId = commentId;

    const addReplyToComment = (comments: CommentType[]): CommentType[] => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, replies: [reply, ...comment.replies] };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: addReplyToComment(comment.replies) };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
  };

  const deleteComment = (commentId: number) => {
    const deleteFromComments = (comments: CommentType[]): CommentType[] => {
      return comments.filter(comment => {
        if (comment.id === commentId) return false;
        comment.replies = deleteFromComments(comment.replies);
        return true;
      });
    };

    setComments(deleteFromComments(comments));
  };

  const addTopLevelComment = () => {
    if (!commentInput.trim()) return;
    const newComment = createNewComment(commentInput.trim());
    setComments([newComment, ...comments]);
    setCommentInput("");
  };

  return (
    <div className={styles.commentSection}>
      <Typography variant="h4" className={styles.commentHeading}>
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
      </Typography>
      <div className={styles.commentInputBox}>
        <textarea
          className={styles.commentInput}
          placeholder="What's your thought?"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          className={styles.btnSubmit}
          onClick={addTopLevelComment}
          disabled={!commentInput.trim()}
        >
          Submit
        </button>
      </div>
      <ul className={styles.commentWrapper}>
        {visibleComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            addReply={addReply}
            deleteComment={deleteComment}
          />
        ))}

        {hasMore && (
          <div className={styles.seeMore}>
            <span onClick={showMore} className={styles.replyButton}>
              See more comments
            </span>
          </div>
        )}

        {!hasMore && visibleComments.length > 5 && (
          <div className={styles.seeMore}>
            <span onClick={showLess} className={styles.replyButton}>
              See less
            </span>
          </div>
        )}
      </ul>
    </div>
  );
}