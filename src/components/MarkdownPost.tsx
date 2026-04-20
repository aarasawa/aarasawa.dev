import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import matter from 'gray-matter';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { Terminal, Calendar, User, Tag } from 'lucide-react';
import styles from './MarkdownPost.module.scss';

import 'katex/dist/katex.min.css';

interface AstroPostProps {
  content: string;
}

const AstroPost: React.FC<AstroPostProps> = ({ content }) => {
  const { data: frontmatter, content: markdownContent } = matter(content);

  useEffect(() => {
    if (frontmatter.title) {
      ReactGA.event({
        category: "Blog",
        action: "View Post",
        label: frontmatter.title,
      });
    }
  }, [frontmatter.title]);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles['markdown-post']}
    >
      {/* Post Header / "Astro" style frontmatter view */}
      <header className={styles['markdown-post__header']}>
        <div className={styles['markdown-post__meta']}>
          {frontmatter.date && (
            <div className={styles['markdown-post__meta-item']}>
              <Calendar className={styles['markdown-post__meta-icon']} />
              {frontmatter.date}
            </div>
          )}
          {frontmatter.author && (
            <div className={styles['markdown-post__meta-item']}>
              <User className={styles['markdown-post__meta-icon']} />
              {frontmatter.author}
            </div>
          )}
        </div>
        
        <h1 className={styles['markdown-post__title']}>
          {frontmatter.title || 'Untitled Post'}
        </h1>

        {frontmatter.description && (
          <p className={styles['markdown-post__description']}>
            {frontmatter.description}
          </p>
        )}

        {frontmatter.tags && Array.isArray(frontmatter.tags) && (
          <div className={styles['markdown-post__tags']}>
            {frontmatter.tags.map((tag: string) => (
              <span key={tag} className={styles['markdown-post__tag']}>
                <Tag className={styles['markdown-post__tag-icon']} />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Markdown Content */}
      <div className={styles['markdown-post__content']}>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm, remarkFrontmatter, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1: ({node, ...props}) => <h2 {...props} />,
            h2: ({node, ...props}) => <h3 {...props} />,
            code: ({node, inline, className, children, ...props}: any) => {
              if (inline) {
                return <code className={styles['markdown-post__code-inline']} {...props}>{children}</code>;
              }
              return (
                <div className={styles['markdown-post__code-container']}>
                  <div className={styles['markdown-post__code-header']}>
                    <Terminal className={styles['markdown-post__code-icon']} />
                    <span className={styles['markdown-post__code-label']}>Code Block</span>
                  </div>
                  <pre className={styles['markdown-post__code-pre']}>
                    <code className={styles['markdown-post__code-block']} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
      
      {/* Post Footer */}
      <footer className={styles['markdown-post__footer']}>
        <button 
          onClick={() => window.history.back()}
          className={styles['markdown-post__back-btn']}
          aria-label="Go back to previous page"
        >
          <span aria-hidden="true">{'<'}</span> Back to Files
        </button>
        <span className={styles['markdown-post__footer-label']}>End of Transmission</span>
      </footer>
    </motion.article>
  );
};

export default AstroPost;
