// CustomCursor.js
import React, { useEffect, useState } from "react";
import "./Signin.css"; // Import the CSS for the cursor

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={cursorStyle}>
      <div className="cursor-dot"></div>
    </div>
  );
};

export default Cursor;
