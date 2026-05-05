import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import styles from "../styles/Bookshelf.module.scss";

interface Book {
  title: string;
  author: string;
  width: number;
  height: number;
  color: [string, string];
  deco: string;
  rating: number;
  year: string;
  genre: string;
  status: string;
  review: string;
}

interface BookshelfProps {
  category: string;
  books: Book[];
}

const DecoSVG: React.FC<{ type: string }> = ({ type }) => {
  const c = 'rgba(255,255,255,0.55)';
  const decos: Record<string, React.ReactElement> = {
    sword: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <line x1="14" y1="2" x2="14" y2="22" stroke={c} strokeWidth="2"/>
        <line x1="8" y1="10" x2="20" y2="10" stroke={c} strokeWidth="1.5"/>
        <polygon points="14,22 11,26 17,26" fill={c}/>
      </svg>
    ),
    circle: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <circle cx="14" cy="14" r="10" stroke={c} strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="4" fill={c} opacity="0.6"/>
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <line x1="4" y1="9" x2="24" y2="9" stroke={c} strokeWidth="1"/><line x1="4" y1="14" x2="24" y2="14" stroke={c} strokeWidth="1"/><line x1="4" y1="19" x2="24" y2="19" stroke={c} strokeWidth="1"/><line x1="9" y1="4" x2="9" y2="24" stroke={c} strokeWidth="1"/><line x1="14" y1="4" x2="14" y2="24" stroke={c} strokeWidth="1"/><line x1="19" y1="4" x2="19" y2="24" stroke={c} strokeWidth="1"/>
      </svg>
    ),
    skull: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <ellipse cx="14" cy="12" rx="8" ry="9" stroke={c} strokeWidth="1.5" fill="none"/>
        <rect x="10" y="20" width="3" height="4" rx="1" fill={c} opacity="0.6"/><rect x="15" y="20" width="3" height="4" rx="1" fill={c} opacity="0.6"/>
        <circle cx="11" cy="11" r="2" fill={c} opacity="0.7"/><circle cx="17" cy="11" r="2" fill={c} opacity="0.7"/>
      </svg>
    ),
    ship: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <polygon points="4,20 24,20 20,24 8,24" fill={c} opacity="0.5"/>
        <line x1="14" y1="4" x2="14" y2="20" stroke={c} strokeWidth="1.5"/>
        <polygon points="14,5 24,14 14,14" fill={c} opacity="0.6"/>
      </svg>
    ),
    chain: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <ellipse cx="10" cy="10" rx="5" ry="3" stroke={c} strokeWidth="1.5" fill="none" transform="rotate(-45 10 10)"/>
        <ellipse cx="18" cy="18" rx="5" ry="3" stroke={c} strokeWidth="1.5" fill="none" transform="rotate(-45 18 18)"/>
      </svg>
    ),
    moon: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <path d="M18 6 A10 10 0 1 0 18 22 A7 7 0 1 1 18 6Z" fill={c} opacity="0.7"/>
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <circle cx="14" cy="14" r="5" fill={c} opacity="0.7"/>
        {[0,45,90,135,180,225,270,315].map(a=><line key={a} x1="14" y1="14" x2={14+10*Math.cos(a*Math.PI/180)} y2={14+10*Math.sin(a*Math.PI/180)} stroke={c} strokeWidth="1.2" opacity="0.6"/>)}
      </svg>
    ),
    desert: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <polyline points="2,22 8,10 14,16 20,6 26,22" stroke={c} strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    door: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <rect x="7" y="4" width="14" height="20" rx="1" stroke={c} strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="14" r="1.5" fill={c} opacity="0.7"/>
      </svg>
    ),
    bracket: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <polyline points="16,4 10,4 10,24 16,24" stroke={c} strokeWidth="2" fill="none"/>
        <polyline points="12,4 18,4 18,24 12,24" stroke={c} strokeWidth="2" fill="none" transform="translate(0,0) scale(-1,1) translate(-28,0)"/>
      </svg>
    ),
    atom: (
      <svg viewBox="0 0 28 28" className={styles['cover-deco']}>
        <circle cx="14" cy="14" r="3" fill={c} opacity="0.8"/>
        <ellipse cx="14" cy="14" rx="12" ry="5" stroke={c} strokeWidth="1.2" fill="none"/>
        <ellipse cx="14" cy="14" rx="12" ry="5" stroke={c} strokeWidth="1.2" fill="none" transform="rotate(60 14 14)"/>
        <ellipse cx="14" cy="14" rx="12" ry="5" stroke={c} strokeWidth="1.2" fill="none" transform="rotate(-60 14 14)"/>
      </svg>
    ),
  };
  return decos[type] || decos.circle;
};

const Bookshelf: React.FC<BookshelfProps> = ({ books, category }) => {
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  const openBook = (book: Book) => {
    setActiveBook(book);
    document.body.style.overflow = 'hidden';
  };

  const closeBook = () => {
    setActiveBook(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBook();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className={styles['bookshelf']}>
        <div className={styles['bookshelf__label-container']}>
          <span className={styles['bookshelf__label']}>{category.toUpperCase()}</span>
          <div className={styles['bookshelf__label-line']} />
        </div>
        
        <div className={styles['bookshelf__container']}>
          <div className={styles['bookshelf__row']}>
            {books.map((book, i) => (
              <div 
                key={`${book.title}-${i}`}
                className={styles['book']}
                style={{ width: book.width, height: book.height }}
                onClick={() => openBook(book)}
              >
                <div 
                  className={styles['book__spine']}
                  style={{ background: `linear-gradient(to right, ${book.color[0]}, ${book.color[1]})` }}
                >
                  <div className={styles['book__title-spine']}>{book.title}</div>
                  <div className={styles['book__author-spine']}>{book.author}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['bookshelf__plank']} />
        </div>
      </div>

      <AnimatePresence>
        {activeBook && (
          <div className={styles['modal__overlay']} onClick={closeBook}>
            <div className={styles['modal__window']} onClick={e => e.stopPropagation()}>
              <div className={styles['modal__titlebar']}>
                <span className={styles['modal__titlebar-text']}>
                  {activeBook.title.toLowerCase().replace(/\s+/g,'_')}.txt
                </span>
                <button className={styles['modal__close']} onClick={closeBook}>
                  [X]
                </button>
              </div>
              
              <div className={styles['modal__body']}>
                <div 
                  className={styles['modal__cover']}
                  style={{ background: `linear-gradient(to right, ${activeBook.color[0]}, ${activeBook.color[1]})` }}
                >
                  <div className={styles['modal__cover-inner']}>
                    <DecoSVG type={activeBook.deco} />
                    <div className={styles['modal__cover-title']}>{activeBook.title}</div>
                    <div className={styles['modal__cover-author']}>{activeBook.author}</div>
                  </div>
                </div>

                <div className={styles['modal__info']}>
                  <div>
                    <h2 className={styles['modal__book-title']}>{activeBook.title}</h2>
                    <div className={styles['modal__book-author']}>{activeBook.author}</div>
                  </div>

                  <div className={styles['modal__stars']}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`${styles['modal__star']} ${i < activeBook.rating ? styles['modal__star--filled'] : styles['modal__star--empty']}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className={styles['modal__rating-label']}>{activeBook.rating}/5</span>
                  </div>

                  <div className={styles['modal__meta']}>
                    <span className={styles['modal__meta-chip']}>{activeBook.year}</span>
                    <span className={styles['modal__meta-chip']}>{activeBook.genre}</span>
                    <span className={styles['modal__meta-chip']}>{activeBook.status}</span>
                  </div>

                  <div className={styles['modal__divider']} />

                  <div>
                    <div className={styles['modal__review-label']}>my thoughts</div>
                    <div 
                      className={styles['modal__review-text']} 
                      dangerouslySetInnerHTML={{ __html: activeBook.review }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Bookshelf;
