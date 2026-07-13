import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setIsVisible(scrollPosition > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      <ul className="list">
        {Array.from({ length: 100 }, (_, index) => (
          <li key={index}>Hello {index + 1}</li>
        ))}
      </ul>

      <div className="container">
        {isVisible && (
          <button
            className="backtotop-btn"
            data-testid="back-to-top-btn"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}

export default BackToTop;