import matter from "gray-matter";

export interface PostFrontmatter {
  title: string;
  date: string;
  category?: string;
  tags?: string[];
  description?: string;
  wordCount: number;
  readingTime: number;
  [key: string]: any;
}

export interface Post {
  slug: string;
  content: string;
  frontmatter: PostFrontmatter;
}

export const getPosts = (): Post[] => {
  const postFiles = (import.meta as any).glob("../content/posts/*.md", {
    query: "?raw",
    eager: true,
  }) as Record<string, { default: string }>;

  return Object.entries(postFiles).map(([path, module]) => {
    const { data, content } = matter(module.default);
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug,
      content: module.default,
      frontmatter: {
        title: data.title || "Untitled Post",
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category,
        tags: data.tags,
        description: data.description,
        ...data,
        wordCount,
        readingTime
      },
    };
  }).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};
