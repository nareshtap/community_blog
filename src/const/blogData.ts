import { defaultComments } from './postComments';

export const blogData = [
  {
    id: 1,
    title: "5 Tips to Boost Your Productivity in 2025",
    author: "Jane Smith",
    date: "January 15, 2025",
    readingTime: "5 min read",
    content: `
      <p>Productivity is the key to achieving more in less time. Whether you're working 
      from home or at the office, these tips will help you get the most out of your day.</p>
      
      <h2>1. Start Your Day with a Plan</h2>
      <p>Before diving into tasks, take a few minutes to list out your priorities. 
      This ensures you're focusing on what truly matters.</p>
      
      <h2>2. Minimize Distractions</h2>
      <p>Turn off unnecessary notifications and create a dedicated workspace to keep 
      your mind focused.</p>
      
      <h2>3. Take Regular Breaks</h2>
      <p>Short breaks between tasks can recharge your energy and improve your focus. 
      Use techniques like the Pomodoro method.</p>
      
      <p>Follow these steps, and you'll see a noticeable improvement in your productivity.</p>
    `,
    comments: [...defaultComments],
  },
  {
    id: 2,
    title: "The Future of AI: Opportunities and Challenges",
    author: "Dr. Alex Johnson",
    date: "January 18, 2025",
    readingTime: "6 min read",
    content: `
      <p>Artificial Intelligence (AI) is transforming industries and redefining how we live and work. 
      But with great power comes great responsibility.</p>
      
      <h2>Opportunities in AI</h2>
      <p>From healthcare to autonomous vehicles, AI is opening doors to innovation. 
      For example, predictive algorithms are enhancing medical diagnoses.</p>
      
      <h2>Challenges Ahead</h2>
      <p>Despite its potential, AI poses ethical concerns such as bias in algorithms 
      and job displacement. Addressing these challenges is crucial for sustainable growth.</p>
      
      <p>The future of AI is bright but demands a balanced approach. How we navigate 
      this path will shape the world we live in.</p>
    `,
    comments: [...defaultComments],
  },
  {
    id: 3,
    title: "Top 10 Travel Destinations for 2025",
    author: "Emily Carter",
    date: "January 22, 2025",
    readingTime: "7 min read",
    content: `
      <p>Ready to plan your next adventure? Here are the top 10 travel destinations for 2025 
      that should be on your bucket list.</p>
      
      <h2>1. Kyoto, Japan</h2>
      <p>Experience the stunning cherry blossoms, ancient temples, and traditional tea houses.</p>
      
      <h2>2. Cape Town, South Africa</h2>
      <p>From Table Mountain to vibrant local markets, Cape Town offers something for everyone.</p>
      
      <h2>3. Amalfi Coast, Italy</h2>
      <p>Known for its picturesque coastal views, delicious cuisine, and luxury villas.</p>
      
      <p>These destinations promise unforgettable memories for travelers in 2025.</p>
    `,
    comments: [...defaultComments],
  },
  {
    id: 4,
    title: "How to Build a Personal Brand Online",
    author: "Michael Brown",
    date: "January 24, 2025",
    readingTime: "4 min read",
    content: `
      <p>In today's digital age, building a personal brand is essential for professionals 
      and entrepreneurs alike. Here's how to get started.</p>
      
      <h2>Define Your Niche</h2>
      <p>Identify the area where you excel and can provide value to others. Specialization 
      helps you stand out in a crowded market.</p>
      
      <h2>Leverage Social Media</h2>
      <p>Create a consistent presence on platforms like LinkedIn, Instagram, or Twitter. 
      Share your knowledge and engage with your audience.</p>
      
      <h2>Network with Purpose</h2>
      <p>Attend industry events, webinars, and online communities to connect with like-minded individuals.</p>
      
      <p>With dedication and effort, your personal brand can open doors to new opportunities.</p>
    `,
    comments: [...defaultComments],
  },
  {
    id: 5,
    title: "The Rise of Sustainable Fashion",
    author: "Sophie Green",
    date: "January 26, 2025",
    readingTime: "5 min read",
    content: `
      <p>The fashion industry is undergoing a transformation as consumers demand more 
      eco-friendly and ethical practices. Here's how sustainable fashion is making an impact.</p>
      
      <h2>What Is Sustainable Fashion?</h2>
      <p>Sustainable fashion focuses on using environmentally friendly materials, reducing waste, 
      and ensuring fair labor practices.</p>
      
      <h2>Why It Matters</h2>
      <p>Fast fashion has led to environmental degradation and poor working conditions. 
      Adopting sustainable practices can mitigate these effects.</p>
      
      <h2>How You Can Contribute</h2>
      <p>Support brands that prioritize sustainability, buy second-hand, and recycle clothing 
      whenever possible.</p>
      
      <p>Join the movement towards a greener, more ethical fashion industry.</p>
    `,
    comments: [...defaultComments],
  }
];

export const generateDefaultPost = () => ({
  id: Date.now(),
  title: '',
  author: '',
  content: '',
  readingTime: `${Math.floor(Math.random() * 10) + 1} min read`,
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  comments: [...defaultComments],
});