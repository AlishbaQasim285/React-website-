import { useState } from "react";

const Header1 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleHeader = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div
          style={{
            display: "flex",
            background: "linear-gradient(to right, pink , purple,red)",
            color: "white", 
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "25%",
          }}
        >
          <h1>
            🎉🛍️ Special Discount Offer 🛍️🎉: Get 20% Off Your Next Purchase 🤩
            !
          </h1>
          <button
            onClick={toggleHeader}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "white",
              paddingRight: "20px",
            }}
          >
            x
          </button>
        </div>
      )}
    </>
  );
};

export default Header1;
