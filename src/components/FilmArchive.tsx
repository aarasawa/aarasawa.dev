import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./FilmArchive.module.scss";

interface Film {
  title: string;
  director: string;
  year: string;
  genre: string;
  rating: number;
  status: string;
  color: string;
  review: string;
  deco: string;
  artFn: (scale: number) => HTMLCanvasElement;
}

interface FilmArchiveProps {
  category: string;
  films: Film[];
}

const FilmCanvas: React.FC<{ 
  artFn: (scale: number) => HTMLCanvasElement; 
  scale?: number;
}> = ({ artFn, scale = 4 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (artFn && containerRef.current) {
      const canvas = artFn(scale);
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(canvas);
    }
  }, [artFn, scale]);

  return <div ref={containerRef} className={styles['canvas-container']} />;
};

const FilmReel: React.FC<{ color: string; artFn: (scale: number) => HTMLCanvasElement; scale?: number }> = ({ color, artFn, scale }) => {
  return (
    <div className={styles['item__canister']} style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px ${color}33` }}>
      <div className={styles['item__reel-holes']}>
        {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
      </div>
      <div className={styles['item__art-frame']}>
        <FilmCanvas artFn={artFn} scale={scale} />
      </div>
    </div>
  );
};

const FilmArchive: React.FC<FilmArchiveProps> = ({ films, category }) => {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  const openFilm = (film: Film) => {
    setActiveFilm(film);
    document.body.style.overflow = 'hidden';
  };

  const closeFilm = () => {
    setActiveFilm(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFilm();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className={styles['archive']}>
        <div className={styles['archive__label-container']}>
          <span className={styles['archive__label']}>{category.toUpperCase()}</span>
          <div className={styles['archive__label-line']} />
        </div>
        
        <div className={styles['archive__rack']}>
          {films.map((film, i) => (
            <div 
              key={`${film.title}-${i}`}
              className={styles['item']}
              onClick={() => openFilm(film)}
            >
              <FilmReel color={film.color} artFn={film.artFn} scale={3} />
              <div className={styles['item__label-tag']}>{film.title}</div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeFilm && (
          <div className={styles['modal__overlay']} onClick={closeFilm}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={styles['modal__window']} 
              onClick={e => e.stopPropagation()}
            >
              <div className={styles['modal__titlebar']}>
                <span className={styles['modal__titlebar-text']}>
                  REEL_ID: {activeFilm.title.toUpperCase().replace(/\s+/g,'_')}_{activeFilm.year}
                </span>
                <button className={styles['modal__close']} onClick={closeFilm}>
                  [X]
                </button>
              </div>
              
              <div className={styles['modal__body']}>
                <div className={styles['modal__reel-view']}>
                  <div className={styles['modal__reel-large']}>
                    <div className={styles['item__reel-holes']}>
                      {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
                    </div>
                    <div className={styles['modal__art-frame-large']}>
                      <FilmCanvas artFn={activeFilm.artFn} scale={5} />
                    </div>
                  </div>
                  <div className={styles['modal__rating']}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ opacity: i < activeFilm.rating ? 1 : 0.2 }}>★</span>
                    ))}
                  </div>
                </div>

                <div className={styles['modal__info']}>
                  <div>
                    <h2 className={styles['modal__film-title']}>{activeFilm.title}</h2>
                    <div className={styles['modal__film-director']}>Directed by {activeFilm.director}</div>
                  </div>

                  <div className={styles['modal__meta']}>
                    <span className={styles['modal__meta-chip']}>{activeFilm.year}</span>
                    <span className={styles['modal__meta-chip']}>{activeFilm.genre}</span>
                    <span className={styles['modal__meta-chip']}>{activeFilm.status}</span>
                  </div>

                  <div className={styles['modal__review-text']} dangerouslySetInnerHTML={{ __html: activeFilm.review }} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilmArchive;
