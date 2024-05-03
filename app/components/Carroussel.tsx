import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import ProjectsCard from './ProjectsCard';
import { CarrousselProps } from './interfaces/CarrousselProps';
import { config } from 'react-spring';

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