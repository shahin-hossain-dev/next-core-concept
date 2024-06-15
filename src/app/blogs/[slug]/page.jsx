import React from "react";

const page = ({ params }) => {
  const { description, title } = blogs.find(
    (blog) => blog.slug === params.slug
  );

  return (
    <div className="w-1/2 mx-auto border-2 shadow-2xl p-5">
      <h2 className="text-2xl mb-6">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
const blogs = [
  {
    title: "A Step-by-Step Guide to Building a Simple Next.js 13 Blog",
    author: "Ebenezer Don",
    url: "https://dev.to/ebenezerdon/building-a-simple-nextjs-blog-4aep",
    description:
      "A comprehensive tutorial for building a simple blog using Next.js 13. Covers fetching data, displaying posts, linking to individual posts, and utilizing Next.js's API routes.",
    keyPoints: [
      "Fetching data with getStaticProps",
      "Displaying posts",
      "Linking individual posts",
      "API routes",
      "Creating components",
      "Styling the blog",
    ],
    slug: "building-simple-nextjs-blog",
  },
  {
    title: "Building a Blog With Next.js and MDX",
    author: "JetBrains WebStorm Team",
    url: "https://blog.jetbrains.com/webstorm/2023/10/building-a-blog-with-nextjs-and-mdx/",
    description:
      "A detailed guide on how to build a blog using Next.js and MDX. Focuses on integrating Markdown with JSX components for rich text formatting and interactivity.",
    keyPoints: [
      "Setting up MDX files",
      "Creating components",
      "Fetching data with getStaticProps",
      "Using HTML tags in Markdown",
      "Integrating SyntaxHighlighter",
    ],
    slug: "building-blog-with-nextjs-mdx",
  },
  {
    title: "The Rise of Next.js in 2024: Trends and Predictions",
    author: "Ahex Team",
    url: "https://ahex.co/blog/the-rise-of-nextjs-in-2024-trends-and-predictions",
    description:
      "Discusses the growing adoption and popularity of Next.js in 2024, highlighting emerging trends such as hybrid rendering, accessibility improvements, and serverless computing integration.",
    keyPoints: [
      "Hybrid rendering for optimal performance",
      "Focus on accessibility and inclusivity",
      "Enhanced developer experience",
      "Cross-platform development",
      "Micro frontends",
      "Jamstack architecture",
      "Serverless computing integration",
    ],
    slug: "nextjs-trends-2024",
  },
  {
    title: "Advanced Features and Best Practices in Next.js",
    author: "SitePoint Team",
    url: "https://www.sitepoint.com/advanced-nextjs-features-best-practices/",
    description:
      "Dives into advanced features of Next.js including Incremental Static Regeneration, API routes, and optimized image handling. Provides best practices for structuring projects, optimizing performance, and deploying applications.",
    keyPoints: [
      "Incremental Static Regeneration (ISR)",
      "API routes",
      "Optimized image handling",
      "Project structure best practices",
      "Performance optimization",
      "Deployment strategies",
    ],
    slug: "advanced-nextjs-features-best-practices",
  },
  {
    title: "Integrating TypeScript with Next.js",
    author: "Vercel Team",
    url: "https://vercel.com/blog/integrating-typescript-with-nextjs",
    description:
      "Insights on how to effectively integrate TypeScript with Next.js for a more robust development experience. Covers setting up TypeScript, configuring paths, and using TypeScript for both server-side and client-side code.",
    keyPoints: [
      "Setting up TypeScript in Next.js",
      "Configuring paths",
      "TypeScript for server-side code",
      "TypeScript for client-side code",
      "Benefits of TypeScript",
    ],
    slug: "integrating-typescript-nextjs",
  },
];
export default page;
