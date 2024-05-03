import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import ProjectsCard from './ProjectsCard';
import { config } from 'react-spring';
import dynamic from 'next/dynamic';

interface ProjectCardProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  handle: string;
  onClick?: () => void;
}

interface CarrousselProps {
  cards: ProjectCardProps[];
  offset: number;
  showArrows: boolean;
  width: string;
  height: string;
  margin: string;
}

const Carroussel: React.FC<CarrousselProps> = ({
  cards: initialCards,
  offset,
  showArrows,
  width,
  height,
  margin
}) => {

  // Map initial cards
  const [cards, setCards] = React.useState(initialCards.map((card, index) => ({
    ...card,
    onClick: () => setGoToSlide(index),
    content: (
      <ProjectsCard
        icon={card.icon}
        href={card.href}
        label={card.label}
        handle={card.handle}
        key={index}
      />
    )
  })));

  // Declare state
  const [offsetRadius, setOffsetRadius] = React.useState<number>(offset);
  const [isShowingArrows, setShowArrows] = React.useState<boolean>(showArrows);
  const [goToSlide, setGoToSlide] = React.useState<number>(0);

  React.useEffect(() => {
    setOffsetRadius(offset);
    setShowArrows(showArrows);
  }, [offset, showArrows]);

  // Render Carousel with config from state props
  return (
    <div
      style={{ width, height, margin }}
    >

        <Carousel

            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.default}

        />

    </div>
  );
}

export default Carroussel;