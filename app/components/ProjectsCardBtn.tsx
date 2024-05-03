import React from "react";

/*
    NOT CURRENTLY IN USE IN THE WEBSITE

    FOR FUTURE USE

    PLANS TO REDO PROJECTS_CARD TO INCLUDE SMALLER BUTTONS TO REDIRECT INTO THE PROJECT WEBSITE
*/

// Define props
interface ButtonProps {
  text: string;
}

const Projects_Card_Btn: React.FC<ButtonProps> = ({
  text
}) => {
  return <button className="flex align-middle justify-between text-white border-white">{text}</button>;
}

export default Projects_Card_Btn;