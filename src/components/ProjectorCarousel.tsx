import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import styles from "../styles/ProjectorCarousel.module.scss";

interface ProjectLink {
  label: string;
  href: string;
  ghost?: boolean;
}

interface Project {
  id: string;
  title: string;
  sub: string;
  desc: string;
  tags: string[];
  artFn: (scale?: number) => HTMLCanvasElement;
  status: string;
  role: string;
  year: string;
  overview: string;
  technical: string;
  links: ProjectLink[];
}

interface ProjectorCarouselProps {
  projects: Project[];
}

const ProjectorCarousel: React.FC<ProjectorCarouselProps> = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const [isScreenOpen, setIsScreenOpen] = useState(false);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const lastActiveElement = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  const N = projects.length;
  const POS_MAP = ['center', 'right1', 'right2', 'hidden', 'hidden', 'hidden', 'left2', 'left1'];

  const getPosition = (idx: number) => {
    const offset = ((idx - current) % N + N) % N;
    return POS_MAP[offset] || 'hidden';
  };

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % N) + N) % N);
  }, [N]);

  const openScreen = (idx: number) => {
    lastActiveElement.current = document.activeElement as HTMLElement;
    const proj = projects[idx];
    setActiveProject(proj);
    setIsScreenOpen(true);
    document.body.style.overflow = 'hidden';

    // Sequence: 1. Show curtain (full height) 2. Wait 3. Animate curtain up + show content
    setTimeout(() => {
      setIsCurtainOpen(true);
      setTimeout(() => {
        setIsContentVisible(true);
        // Focus close button for accessibility
        setTimeout(() => closeButtonRef.current?.focus(), 100);
      }, 550);
    }, 50);
  };

  const closeScreen = () => {
    setIsContentVisible(false);
    setIsCurtainOpen(false);
    
    setTimeout(() => {
      setIsScreenOpen(false);
      setActiveProject(null);
      document.body.style.overflow = '';
      // Return focus to triggering card
      lastActiveElement.current?.focus();
    }, 550);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScreenOpen) {
        if (e.key === 'Escape') closeScreen();
        return;
      }
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isScreenOpen, current, goTo]);

  return (
    <>
      <section className={styles['projector']} role="region" aria-label="Project Archive Carousel">
        <div className={styles['projector__rig']}>
          <button 
            className={`${styles['projector__arrow']} ${styles['projector__arrow--left']}`} 
            onClick={() => goTo(current - 1)}
            aria-label="Previous Project"
          >
            &#9664;
          </button>
          
          <div className={styles['projector__track']}>
            {projects.map((proj, i) => (
              <ProjectCard 
                key={proj.id} 
                project={proj} 
                index={i} 
                position={getPosition(i)} 
                onSelect={() => {
                  if (getPosition(i) === 'center') openScreen(i);
                  else goTo(i);
                }}
              />
            ))}
          </div>

          <button 
            className={`${styles['projector__arrow']} ${styles['projector__arrow--right']}`} 
            onClick={() => goTo(current + 1)}
            aria-label="Next Project"
          >
            &#9654;
          </button>
        </div>
      </section>

      <div className={styles['projector__dots']} role="tablist" aria-label="Carousel navigation">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`${styles['projector__dot']} ${current === i ? styles['projector__dot--active'] : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={current === i}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles['filmstrip']}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles['filmstrip__hole']} />
        ))}
      </div>

      {/* Projector Screen Reveal Overlay */}
      <AnimatePresence>
        {isScreenOpen && (
          <div 
            className={styles['screen']} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="screen-project-title"
          >
            <div 
              className={`${styles['screen__overlay']} ${isCurtainOpen ? styles['screen__overlay--open'] : ''}`}
              onClick={closeScreen}
              aria-hidden="true"
            />
            
            <div className={`${styles['screen__curtain']} ${isCurtainOpen ? '' : styles['screen__curtain--open']}`} aria-hidden="true" />
            
            <div className={`${styles['screen__content']} ${isContentVisible ? styles['screen__content--visible'] : ''}`}>
              <div className={styles['screen__bar']}>
                <span className={styles['screen__bar-title']}>
                  {(activeProject?.title || '').toLowerCase().replace(/\s+/g,'_')}.md
                </span>
                <button 
                  ref={closeButtonRef}
                  className={styles['screen__close']} 
                  onClick={closeScreen}
                  aria-label="Close project view"
                >
                  [X] CLOSE
                </button>
              </div>
              
              <div className={styles['screen__body']}>
                <div className={styles['screen__art-frame']}>
                  <ProjectCanvas artFn={activeProject?.artFn} scale={10} altText={`Retro art for ${activeProject?.title}`} />
                </div>
                
                <div className={styles['screen__info']}>
                  <h2 id="screen-project-title" className={styles['screen__project-title']}>{activeProject?.title}</h2>
                  <div className={styles['screen__project-sub']}>{activeProject?.sub}</div>
                  
                  <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '.4rem' }}>
                    <span className={styles['screen__tag']}>{activeProject?.status}</span>
                    <span className={styles['screen__tag']}>{activeProject?.role}</span>
                    <span className={styles['screen__tag']}>{activeProject?.year}</span>
                  </div>
                  
                  <div className={styles['screen__divider']} />
                  
                  <h3 className={styles['screen__section-label']}>Overview</h3>
                  <div 
                    className={styles['screen__text']} 
                    dangerouslySetInnerHTML={{ __html: activeProject?.overview || '' }} 
                  />
                  
                  <h3 className={styles['screen__section-label']}>Technical</h3>
                  <div className={styles['screen__text']}>{activeProject?.technical}</div>
                  
                  <h3 className={styles['screen__section-label']}>Stack</h3>
                  <div className={styles['screen__tags']}>
                    {activeProject?.tags.map(t => (
                      <span key={t} className={styles['screen__tag']}>{t}</span>
                    ))}
                  </div>
                  
                  <div className={styles['screen__links']}>
                    {activeProject?.links.map(l => (
                      <a 
                        key={l.label} 
                        href={l.href} 
                        className={`${styles['screen__link']} ${l.ghost ? styles['screen__link--ghost'] : ''}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>

                  <div className={styles['screen__divider']} style={{ marginTop: '2rem' }} />
                  <button 
                    onClick={closeScreen}
                    className={styles['screen__link']}
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', background: 'rgba(255,179,71,0.05)' }}
                  >
                    [X] RETURN TO ARCHIVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  position: string;
  onSelect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, position, onSelect }) => {
  const isCenter = position === 'center';
  
  return (
    <button 
      className={`${styles['slide']} ${styles[`slide--${position}`]}`}
      onClick={onSelect}
      aria-label={`View details for ${project.title}`}
      aria-roledescription="slide"
    >
      <div className={styles['slide__art']} aria-hidden="true">
        <ProjectCanvas artFn={project.artFn} scale={7} />
      </div>
      
      <div className={styles['slide__info']}>
        <div className={styles['slide__num']}>
          SLIDE {String(index + 1).padStart(2, '0')}
        </div>
        <div>
          <h3 className={styles['slide__title']}>{project.title}</h3>
          <p className={styles['slide__desc']}>{project.desc}</p>
          <div className={styles['slide__tags']}>
            {project.tags.slice(0, 3).map(t => (
              <span key={t} className={styles['slide__tag']}>{t}</span>
            ))}
          </div>
        </div>
        <div className={styles['slide__cta']}>CLICK TO EXPAND</div>
      </div>
    </button>
  );
};

const ProjectCanvas: React.FC<{ 
  artFn?: (scale?: number) => HTMLCanvasElement; 
  scale?: number;
  altText?: string;
}> = ({ artFn, scale = 8, altText }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (artFn && containerRef.current) {
      const canvas = artFn(scale);
      if (altText) {
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', altText);
      }
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(canvas);
    }
  }, [artFn, scale, altText]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ProjectorCarousel;
