# Community Blog Platform

A modern, interactive blog platform built with React, TypeScript, and Material-UI that allows users to create posts, add comments, and engage in discussions.

## Features

- 📝 Create and publish blog posts with Markdown support
- 💬 Interactive comment system with nested replies
- 👥 User-specific comment management
- 📱 Fully responsive design
- 🎨 Modern UI with Material Design components
- ⚡ Fast performance with Vite
- 🔍 TypeScript for better code quality
- 💅 SCSS Modules for styling

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **UI Framework:** Material-UI
- **Markdown Parser:** Marked
- **Styling:** SCSS Modules

## Project Structure

```
src/
├── components/
│   ├── blog/
│   │   ├── BlogContent.tsx
│   │   ├── BlogHeader.tsx
│   │   └── styles.module.scss
│   ├── comment/
│   │   ├── Comment.tsx
│   │   └── styles.module.scss
│   ├── postComments/
│   │   ├── CommentSection.tsx
│   │   └── styles.module.scss
│   ├── postForm/
│   │   ├── PostForm.tsx
│   │   └── styles.module.scss
│   ├── post/
│   │   ├── Post.tsx
│   │   └── styles.module.scss
│   └── postList/
│       ├── PostList.tsx
│       └── styles.module.scss
├── utils/
│   └── interfaces.tsx
├── const/
│   ├── blogData.ts
│   └── postComments.ts
├── hooks/
│   ├── useMockData.ts
│   └── usePaginatedView.ts
├── styles/
│   └── global.scss
├── App.tsx
├── App.module.scss
├── index.scss
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:nareshtap/community_blog.git
```

2. Navigate to the project directory:
```bash
cd community-blog
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Usage

### Creating a Blog Post
1. Click the "Create Post" button
2. Fill in the title, author, and content
3. Use Markdown syntax in the content for formatting
4. Click "Save Post" to publish

### Commenting System
- Add comments to any blog post
- Reply to existing comments with nested threading
- Delete your own comments
- View nested comment threads
- Expand/collapse comment sections
- Paginated comment view for better performance

## Features in Detail

### Blog Posts
- Markdown support for rich text formatting
- Author attribution and reading time estimation
- Responsive image handling
- Clean and modern post layout

### Comments
- Nested reply structure
- User-specific actions (delete own comments)
- Avatar generation based on username
- Paginated view for better performance
- Interactive reply system

### UI/UX
- Responsive design for all screen sizes
- Material-UI components integration
- SCSS modules for scoped styling
- Smooth animations and transitions
- Confirmation dialogs for important actions

### Demo


![community_blog](https://github.com/user-attachments/assets/b441699c-5ea4-490f-8b6f-f85bb14f250e)
