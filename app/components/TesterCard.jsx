import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../components/TesterButton";
import { Tractor } from 'lucide-react';

function Card({ imagen, icon, href, label, handle }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <>{icon}</>
      <h2>{label}</h2>
      <p>{handle}</p>
      <div className="btnn">
        <Button text="Demo" />
        <Button text="Code" />
      </div>
    </animated.div>
  );
}

export default Card;
