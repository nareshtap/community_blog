import React, { useState } from 'react';
import { Button, TextField, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import styles from './styles.module.scss';
import { PostFormProps } from '../../utils/interfaces';
import { marked } from 'marked';
import { generateDefaultPost } from '../../const/blogData';

const PostForm: React.FC<PostFormProps> = ({ addPost }) => {
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState(generateDefaultPost());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = async () => {
    const htmlContent = await marked(newPost.content);
    const postWithId = {
      ...newPost,
      id: Date.now(),
      content: htmlContent,
      comments: [],
    };

    addPost(postWithId);
    setNewPost(generateDefaultPost());
    setShowForm(false);
  };

  const isFormValid = newPost.title.trim() !== '' && newPost.author.trim() !== '' && newPost.content.trim() !== '';

  return (
    <div className={styles.wrapperHeader}>
      <Button
        color='secondary'
        onClick={() => setShowForm(true)}
        variant="contained"
      >
        Create Post
      </Button>
      <Dialog
        className={styles.dialogWrap}
        open={showForm}
        onClose={() => setShowForm(false)}
      >
        <DialogTitle>Create a New Post</DialogTitle>
        <DialogContent>
          <Box className={styles.formContainer}>
            <TextField
              label="Title*"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Author*"
              name="author"
              value={newPost.author}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Content*"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowForm(false)} color="error" variant='contained'>
            Cancel
          </Button>
          <Button onClick={handleAddPost} disabled={!isFormValid} variant="contained" color={isFormValid ? "primary" : "secondary"}>
            Save Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostForm;
