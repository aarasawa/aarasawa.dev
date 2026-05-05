import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import ReactGA from 'react-ga4';
import { Terminal, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/MarkdownPost.module.scss';

// ── Post data shape ──────────────────────────────────────
// All fields pre-parsed by Astro — no gray-matter needed here.
export interface MarkdownPostData {
  slug:        string;
  title:       string;
  published:   string;   // ISO string
  description: string;
  tags:        string[];
  category:    string;
  wordCount:   number;
  readingTime: number;
  prevTitle:   string;
  prevSlug:    string;
  nextTitle:   string;
  nextSlug:    string;
}

interface MarkdownPostProps {
  post: MarkdownPostData;
  // Astro's <Content /> component is passed as children
  children?: React.ReactNode;
}

const MarkdownPost: React.FC<MarkdownPostProps> = ({ post, children }) => {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
      year:  'numeric',
      month: 'long',
      day:   'numeric',
    });

  useEffect(() => {
    if (post.title) {
      ReactGA.event({
        category: 'Blog',
        action:   'View Post',
        label:    post.title,
      });
    }
  }, [post.title]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles['markdown-post']}
    >
      {/* Header */}
      <header className={styles['markdown-post__header']}>
        <div className={styles['markdown-post__meta']}>
          <div className={styles['markdown-post__meta-item']}>
            <Calendar className={styles['markdown-post__meta-icon']} />
            {formatDate(post.published)}
          </div>
          {post.category && (
            <div className={styles['markdown-post__meta-item']}>
              <Terminal className={styles['markdown-post__meta-icon']} />
              {post.category}
            </div>
          )}
          <div className={styles['markdown-post__meta-item']}>
            {post.wordCount} words · {post.readingTime} min read
          </div>
        </div>

        <h1 className={styles['markdown-post__title']}>{post.title}</h1>

        {post.description && (
          <p className={styles['markdown-post__description']}>{post.description}</p>
        )}

        {post.tags.length > 0 && (
          <div className={styles['markdown-post__tags']}>
            {post.tags.map(tag => (
              <span key={tag} className={styles['markdown-post__tag']}>
                <Tag className={styles['markdown-post__tag-icon']} />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content — rendered by Astro's <Content /> passed as children */}
      <div className={styles['markdown-post__content']}>
        {children}
      </div>

      {/* Footer */}
      <footer className={styles['markdown-post__footer']}>
        <div className={styles['markdown-post__nav']}>
          {post.prevSlug ? (
            <a
              href={`/writing/${post.prevSlug}`}
              className={styles['markdown-post__nav-link']}
            >
              <ChevronLeft size={14} />
              <span>{post.prevTitle}</span>
            </a>
          ) : (
            <span />
          )}
          {post.nextSlug ? (
            <a
              href={`/writing/${post.nextSlug}`}
              className={`${styles['markdown-post__nav-link']} ${styles['markdown-post__nav-link--next']}`}
            >
              <span>{post.nextTitle}</span>
              <ChevronRight size={14} />
            </a>
          ) : (
            <span />
          )}
        </div>

        <div className={styles['markdown-post__footer-bottom']}>
          <a href="/writing" className={styles['markdown-post__back-btn']}>
            {'<'} Back to Files
          </a>
          <span className={styles['markdown-post__footer-label']}>
            End of Transmission
          </span>
        </div>
      </footer>
    </motion.article>
  );
};

export default MarkdownPost;