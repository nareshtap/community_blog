import { CommentType, PostType } from "../utils/interfaces";


// Initial static posts with comments and replies
export const initialPosts: PostType[] = [
  {
    id: 1,
    content: "This is the first post",
    comments: [
      {
        id: 1,
        username: "User1",
        text: "First comment on this post",
        replies: [
          {
            id: 2,
            username: "User2",
            text: "First reply to first comment",
            replies: []
          }
        ]
      },
      {
        id: 3,
        username: "User3",
        text: "Second comment on this post",
        replies: []
      }
    ]
  },
];

export const defaultComments: CommentType[] = [
  {
    id: 1,
    username: "JaneDoe",
    text: "This is a great post!",
    replies: [],
  },
  {
    id: 2,
    username: "JohnSmith",
    text: "I found this really helpful, thanks!",
    replies: [
      {
        id: 3,
        username: "Alice",
        text: "Totally agree!",
        replies: [],
      },
    ],
  },
];

