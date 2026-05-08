import React, { useState } from "react";
import {
  Calendar,
  BookOpen,
  Hash,
  ChevronRight,
  Linkedin,
  Github,
  MoreHorizontal,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import styles from "../../styles/WritingPage.module.scss";
export interface PostData {
  slug: string;      
  id: string;        
  title: string;
  published: string;  
  description: string;
  tags: string[];
  category: string;
  wordCount: number;
  readingTime: number;
}

interface WritingPageProps {
  posts: PostData[];
  onPostClick?: (slug: string) => void;
}

const WritingPage: React.FC<WritingPageProps> = ({ posts, onPostClick }) => {
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedCats, setExpandedCats] = useState(false);
  const [expandedTags, setExpandedTags] = useState(false);

  const categories = Array.from(
    new Set(posts.map(p => p.category || "General"))
  ).sort();

  const tags = Array.from(
    new Set(posts.flatMap(p => p.tags))
  ).sort();

  const toggleCat = (cat: string) =>
    setSelectedCats(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );

  const toggleTag = (tag: string) =>
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );

  const clearFilters = () => {
    setSelectedCats([]);
    setSelectedTags([]);
  };

  const filteredPosts = posts.filter(post => {
    const catMatch =
      selectedCats.length === 0 || selectedCats.includes(post.category || "General");
    const tagMatch =
      selectedTags.length === 0 || selectedTags.some(t => post.tags.includes(t));
    return catMatch && tagMatch;
  });

  const getCategoryCount = (cat: string) =>
    posts.filter(p => (p.category || "General") === cat).length;

  const displayCats = expandedCats ? categories : categories.slice(0, 5);
  const displayTags = expandedTags ? tags : tags.slice(0, 15);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const handleClick = (post: PostData) => {
    if (onPostClick) {
      onPostClick(post.slug);
    } else {
      window.location.href = `/writing/${post.slug}`;
    }
  };

  return (
    <div className={styles["writing"]}>
      {/* Sidebar */}
      <aside className={styles["sidebar"]}>
        {/* Profile Card */}
        <section className={`${styles["sidebar__section"]} ${styles["sidebar__profile"]}`}>
          <h2 className={styles["sidebar__name"]}>Alexander Arasawa</h2>
          <p className={styles["sidebar__bio"]}>
            Trying to learn more about everything. Full-stack developer with a
            focus on systems engineering.
          </p>
          {(selectedCats.length > 0 || selectedTags.length > 0) && (
            <button className={styles["sidebar__clear"]} onClick={clearFilters}>
              <X size={14} /> CLEAR FILTERS
            </button>
          )}
          <div className={styles["sidebar__socials"]}>
            <a
              href="https://www.linkedin.com/in/alexarasawa"
              className={styles["sidebar__social-link"]}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.github.com/aarasawa"
              className={styles["sidebar__social-link"]}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
            </a>
          </div>
        </section>

        {/* Categories */}
        <section className={styles["sidebar__section"]}>
          <div className={styles["sidebar__header_row"]}>
            <h3 className={styles["sidebar__header"]}>Categories</h3>
            {categories.length > 5 && (
              <button
                className={styles["sidebar__expander"]}
                onClick={() => setExpandedCats(!expandedCats)}
              >
                {expandedCats ? "LESS" : "MORE"}
              </button>
            )}
          </div>
          <ul className={styles["sidebar__list"]}>
            {displayCats.map(cat => (
              <li
                key={cat}
                className={`${styles["sidebar__list-item"]} ${
                  selectedCats.includes(cat) ? styles["sidebar__list-item--active"] : ""
                }`}
                onClick={() => toggleCat(cat)}
              >
                <span>{cat}</span>
                <span className={styles["sidebar__count"]}>
                  {getCategoryCount(cat)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tags */}
        <section className={styles["sidebar__section"]}>
          <div className={styles["sidebar__header_row"]}>
            <h3 className={styles["sidebar__header"]}>Tags</h3>
            {tags.length > 15 && (
              <button
                className={styles["sidebar__expander"]}
                onClick={() => setExpandedTags(!expandedTags)}
              >
                {expandedTags ? "LESS" : "MORE"}
              </button>
            )}
          </div>
          <div className={styles["sidebar__tags"]}>
            {displayTags.map(tag => (
              <span
                key={tag}
                className={`${styles["sidebar__tag"]} ${
                  selectedTags.includes(tag) ? styles["sidebar__tag--active"] : ""
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </aside>

      {/* Post stream */}
      <main className={styles["content"]}>
        {filteredPosts.length === 0 ? (
          <div className={styles["empty_state"]}>
            <MoreHorizontal size={32} />
            <p>NO POSTS MATCH THE SELECTED CRITERIA</p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={styles["post_card"]}
              onClick={() => handleClick(post)}
            >
              <div className={styles["post_card__main"]}>
                <div className={styles["post_card__status_row"]}>
                  <div className={`${styles["post_card__status_dot"]} status-pulse`} />
                  <span>PROCESSED</span>
                </div>

                <h2 className={styles["post_card__title"]}>{post.title}</h2>

                <div className={styles["post_card__meta"]}>
                  <div className={styles["post_card__meta_item"]}>
                    <Calendar />
                    <span>{formatDate(post.published)}</span>
                  </div>
                  <div className={styles["post_card__meta_item"]}>
                    <BookOpen />
                    <span>{post.category || "General"}</span>
                  </div>
                  <div className={styles["post_card__meta_item"]}>
                    <Hash />
                    <div>
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className={styles["post_card__tag_badge"]}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className={styles["post_card__excerpt"]}>
                  {post.description ||
                    "Experimental findings and technical logs related to project development."}
                </p>

                <div className={styles["post_card__stats"]}>
                  <span>{post.wordCount} words</span>
                  <span>|</span>
                  <span>{post.readingTime} min</span>
                </div>
              </div>

              <div className={styles["post_card__side"]}>
                <ChevronRight />
              </div>
            </motion.article>
          ))
        )}
      </main>
    </div>
  );
};

export default WritingPage;