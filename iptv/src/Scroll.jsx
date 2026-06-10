import  { useState, useEffect } from "react";

function Scroll() {
  const [showHomeLink, setShowHomeLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHomeLink(true);
      } else {
        setShowHomeLink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "2000px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to My Page</h1>
      <p>Scroll down to see the Home link appear...</p>

      {showHomeLink && (
        <a
          href="/"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#007BFF",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Home
        </a>
      )}
    </div>
  );
}

export default Scroll;
