import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  BookOpen, 
  Hash, 
  ChevronRight, 
  Linkedin, 
  Github, 
  Globe, 
  MoreHorizontal,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MarkdownPost from "../components/MarkdownPost";
import { getPosts, Post } from "../lib/posts";
import styles from "../styles/WritingPage.module.scss";

const WritingPage: React.FC = () => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedCats, setExpandedCats] = useState(false);
  const [expandedTags, setExpandedTags] = useState(false);

  const allPosts = getPosts();

  // Extract unique categories and tags from all posts
  const categories = Array.from(new Set(allPosts.map(p => p.frontmatter.category || "General"))).sort();
  const tags = Array.from(new Set(allPosts.flatMap(p => p.frontmatter.tags || []))).sort();

  const handlePostClick = (post: Post) => {
    setActivePost(post);
  };

  const handleClose = () => {
    setActivePost(null);
  };

  const toggleCat = (cat: string) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCats([]);
    setSelectedTags([]);
  };

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    const postCat = post.frontmatter.category || "General";
    const postTags = post.frontmatter.tags || [];
    
    const catMatch = selectedCats.length === 0 || selectedCats.includes(postCat);
    const tagMatch = selectedTags.length === 0 || selectedTags.some(t => postTags.includes(t));
    
    return catMatch && tagMatch;
  });

  const getCategoryCount = (cat: string) => 
    allPosts.filter(p => (p.frontmatter.category || "General") === cat).length;

  const displayCats = expandedCats ? categories : categories.slice(0, 5);
  const displayTags = expandedTags ? tags : tags.slice(0, 15);

  return (
    <div className={styles['writing']}>
      {/* Sidebar */}
      <aside className={styles['sidebar']}>
        {/* Profile Card */}
        <section className={`${styles['sidebar__section']} ${styles['sidebar__profile']}`}>
          <div className={styles['sidebar__avatar']}>
            <img 
              src="https://unsplash.com/photos/mysterious-orb-illuminates-lone-figure-in-the-fog-o-DQXFJEL4o" 
              alt="Picture of a stranger standing alone before a mysterious orb emanating orange light" 
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className={styles['sidebar__name']}>Alexander Arasawa</h2>
          <p className={styles['sidebar__bio']}>
            Trying to learn more about everything. Full-stack developer with a focus on systems engineering.
          </p>
          {(selectedCats.length > 0 || selectedTags.length > 0) && (
            <button className={styles['sidebar__clear']} onClick={clearFilters}>
              <X size={14} /> CLEAR FILTERS
            </button>
          )}
          <div className={styles['sidebar__socials']}>
            <a href="https://www.linkedin.com/in/alexarasawa" className={styles['sidebar__social-link']}><Linkedin size={18} /></a>
            <a href="https://www.github.com/aarasawa" className={styles['sidebar__social-link']}><Github size={18} /></a>
          </div>
        </section>

        {/* Categories Section */}
        <section className={styles['sidebar__section']}>
          <div className={styles['sidebar__header_row']}>
            <h3 className={styles['sidebar__header']}>Categories</h3>
            {categories.length > 5 && (
              <button 
                className={styles['sidebar__expander']} 
                onClick={() => setExpandedCats(!expandedCats)}
              >
                {expandedCats ? 'LESS' : 'MORE'}
              </button>
            )}
          </div>
          <ul className={styles['sidebar__list']}>
            {displayCats.map(cat => (
              <li 
                key={cat} 
                className={`${styles['sidebar__list-item']} ${selectedCats.includes(cat) ? styles['sidebar__list-item--active'] : ''}`}
                onClick={() => toggleCat(cat)}
              >
                <span>{cat}</span>
                <span className={styles['sidebar__count']}>{getCategoryCount(cat)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tags Section */}
        <section className={styles['sidebar__section']}>
          <div className={styles['sidebar__header_row']}>
            <h3 className={styles['sidebar__header']}>Tags</h3>
            {tags.length > 15 && (
              <button 
                className={styles['sidebar__expander']} 
                onClick={() => setExpandedTags(!expandedTags)}
              >
                {expandedTags ? 'LESS' : 'MORE'}
              </button>
            )}
          </div>
          <div className={styles['sidebar__tags']}>
            {displayTags.map(tag => (
              <span 
                key={tag} 
                className={`${styles['sidebar__tag']} ${selectedTags.includes(tag) ? styles['sidebar__tag--active'] : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </aside>

      {/* Main Stream */}
      <main className={styles['content']}>
        {filteredPosts.length === 0 ? (
          <div className={styles['empty_state']}>
            <MoreHorizontal size={32} />
            <p>NO POSTS MATCH THE SELECTED CRITERIA</p>
          </div>
        ) : (
          filteredPosts.map((post, i) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={styles['post_card']}
              onClick={() => handlePostClick(post)}
            >
              <div className={styles['post_card__main']}>
                <div className={styles['post_card__status_row']}>
                  <div className={`${styles['post_card__status_dot']} status-pulse`} />
                  <span>PROCESSED</span>
                </div>
                
                <h2 className={styles['post_card__title']}>{post.frontmatter.title}</h2>
                
                <div className={styles['post_card__meta']}>
                  <div className={styles['post_card__meta_item']}>
                    <Calendar />
                    <span>{post.frontmatter.date}</span>
                  </div>
                  <div className={styles['post_card__meta_item']}>
                    <BookOpen />
                    <span>{post.frontmatter.category || "General"}</span>
                  </div>
                  <div className={styles['post_card__meta_item']}>
                    <Hash />
                    <div>
                      {post.frontmatter.tags?.slice(0, 3).map((tag: string) => (
                        <span key={tag} className={styles['post_card__tag_badge']}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className={styles['post_card__excerpt']}>
                  {post.frontmatter.description || "Experimental findings and technical logs related to project development."}
                </p>

                <div className={styles['post_card__stats']}>
                  <span>{post.frontmatter.wordCount} words</span>
                  <span>|</span>
                  <span>{post.frontmatter.readingTime} min</span>
                </div>
              </div>

              <div className={styles['post_card__side']}>
                <ChevronRight />
              </div>
            </motion.article>
          ))
        )}
      </main>

      <AnimatePresence>
        {activePost && (
          <div className={styles['maximized']}>
            <button 
              className={styles['maximized__close']}
              onClick={handleClose}
            >
              <X size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              CLOSE ARCHIVE
            </button>
            <div className={styles['maximized__container']}>
              <MarkdownPost content={activePost.content} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WritingPage;
