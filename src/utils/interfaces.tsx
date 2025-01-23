export interface BlogData {
  id: number;
  title: string;
  author: string;
  date: string;
  readingTime: string;
  content: string;
  comments: CommentType[];
}

export interface BlogHeaderProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
}

export interface BlogContentProps {
  content: string;
}

export interface PostFormProps {
  addPost: (newPost: BlogData) => void;
}

export interface CommentType {
  id: number;
  username: string;
  text: string;
  replies: CommentType[];
  parentId?: number;
}

export interface PostType {
  id: number;
  content: string;
  comments: CommentType[];
}