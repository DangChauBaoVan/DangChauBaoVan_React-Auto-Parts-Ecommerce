import { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 border border-[#013065] text-[#013065] p-3 rounded-full shadow-lg hover:bg-[#013065] hover:text-white transition duration-300"
      >
        <BsChevronUp />

      </button>
    )
  );
}
