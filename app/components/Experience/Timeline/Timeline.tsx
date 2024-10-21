import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Timeline.module.css';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface ResumeTimelineProps {
  items: TimelineItem[];
}

const ResumeTimeline: React.FC<ResumeTimelineProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { ref: scrollRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const scrollPosition = window.innerHeight - top;
        const index = Math.floor((scrollPosition / height) * items.length);
        setActiveIndex(Math.max(0, Math.min(index, items.length - 1)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <div className={styles.container} ref={scrollRef}>
      <div className={styles.stickyContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>{items[activeIndex].title}</h2>
          <p className={styles.date}>{items[activeIndex].date}</p>
          <p className={styles.description}>{items[activeIndex].description}</p>
        </div>
      </div>
      <div className={styles.timelineTrack} ref={timelineRef}>
        {items.map((_, index) => (
          <div key={index} className={styles.timelineItem} />
        ))}
      </div>
    </div>
  );
};

export default ResumeTimeline;