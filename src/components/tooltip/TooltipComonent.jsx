import { useState } from "react";

import "./tooltip.scss";

export default function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  }

  return (
    <>
      <div
        className="tooltip-container"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
        {isVisible && (
          <p
            className="tooltip-text"
            style={{
              position: "fixed",
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
          >
            {text}
          </p>
        )}
      </div>
    </>
  );
}
