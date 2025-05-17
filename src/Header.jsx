import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-black bg-opacity-${
        scrollPosition > 50 ? "95" : "100"
      } backdrop-blur-sm text-white w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 20 ? "shadow-lg" : ""
      }`}
    >
      <div className="flex items-center z-10">
        <div className="font-extrabold tracking-tighter text-3xl">
          <Link to={"/"}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Satya
            </span>
          </Link>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute right-24 top-1/2 transform -translate-y-1/2 opacity-80">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rotate-45 transform absolute animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            filter: "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))",
          }}
        ></div>
        <div
          className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rotate-12 transform absolute top-4 right-8 animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.4))",
            animationDelay: "0.2s",
          }}
        ></div>
        <div
          className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-500 -rotate-12 transform absolute top-6 right-4 animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            filter: "drop-shadow(0 0 8px rgba(244, 114, 182, 0.4))",
            animationDelay: "0.4s",
          }}
        ></div>
      </div>

      <button
        className={`relative overflow-hidden font-medium px-8 py-3 rounded-md transition-all duration-300 z-10 group ${
          isHovered
            ? "bg-white text-black shadow-lg shadow-white/20"
            : "bg-transparent text-white border border-white/30"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={"/contact"}>
          <span className="relative z-10">Contact Me</span>
        </Link>
        <span
          className={`absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></span>
        <span
          className={`absolute inset-0 bg-white opacity-0 ${
            isHovered ? "opacity-100" : ""
          } transition-opacity duration-300`}
        ></span>
      </button>
    </header>
  );
}
