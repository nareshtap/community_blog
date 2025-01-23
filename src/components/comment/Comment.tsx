import { useState, useRef } from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.scss";
import { CommentType } from "../../utils/interfaces";
import ConfirmationDialog from "../ConfirmationDialog";
import { usePaginatedView } from "../../hooks/usePaginatedView";
import { Button } from "@mui/material";

interface CommentProps {
  comment: CommentType;
  addReply: (commentId: number, replyText: string) => void;
  deleteComment: (commentId: number, parentId?: number) => void;
}

const MAX_VISIBLE_REPLIES = 1;

export default function Comment({ comment, addReply, deleteComment }: CommentProps) {
  const [replyText, setReplyText] = useState<string>("");
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const { visibleItems: visibleReplies, hasMore, showMore, showLess } = usePaginatedView(
    comment.replies,
    MAX_VISIBLE_REPLIES
  );

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setShowReplyBox(false);
      setReplyText("");
    }
  };

  const handleDelete = () => {
    setIsDialogOpen(true);
  };

  const confirmDelete = () => {
    deleteComment(comment.id, comment.parentId);
    setIsDialogOpen(false);
  };

  const cancelDelete = () => {
    setIsDialogOpen(false);
  };

  const getAvatarColor = (username: string): string => {
    const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae", "#2db7f5"];
    const index = username.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <li className={styles.commentItem}>
      <div className={styles.commentContent}>
        <div
          className={styles.avatar}
          style={{ backgroundColor: getAvatarColor(comment.username) }}
        >
          {comment.username.charAt(0).toUpperCase()}
        </div>

        <div>
          <strong className={styles.username}>{comment.username}</strong>
          <p className={styles.commentText}>{comment.text}</p>
        </div>
      </div>

      <div className={styles.actionsBtn}>
        <div
          className={styles.replyButton}
          onClick={() => {
            setShowReplyBox(!showReplyBox);
            setTimeout(() => inputEl.current?.focus(), 0);
          }}
        >
          <ReplyIcon className={styles.iconWrap}/>
          <span className={styles.btnWrap}>{showReplyBox ? "Cancel" : "Reply"}</span>
        </div>

        {comment.username === "Current User" && (
          <div className={styles.deltButton} onClick={handleDelete}>
            <DeleteIcon className={styles.iconWrap}/>
            <span>Delete</span>
          </div>
        )}
      </div>

      {showReplyBox && (
        <div className={styles.replyBox}>
          <textarea
            ref={inputEl}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className={styles.textarea}
          />
          <div className={styles.replyActions}>
            <Button variant="contained" color="primary" onClick={handleReply}>
              Send
            </Button>
          </div>
        </div>
      )}

      {comment.replies.length > 0 && (
        <ul className={styles.replyList}>
          {visibleReplies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              addReply={addReply}
              deleteComment={deleteComment}
            />
          ))}

          {hasMore && (
            <div className={styles.seeMore}>
              <span onClick={showMore} className={styles.replyButton}>
                See more replies
              </span>
            </div>
          )}

          {!hasMore && visibleReplies.length > MAX_VISIBLE_REPLIES && (
            <div className={styles.seeMore}>
              <span onClick={showLess} className={styles.replyButton}>
                See less
              </span>
            </div>
          )}
        </ul>
      )}

      <ConfirmationDialog
        open={isDialogOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this comment?"
      />
    </li>
  );
}