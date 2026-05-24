import { Search, Code2 } from "lucide-react";

import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

import TutorialDropdown from "../TutorialDropdown/TutorialDropdown";

import { languagesData } from "../../data/languagesData";

function Navbar() {
  const [showTutorials, setShowTutorials] = useState(false);

  const [search, setSearch] = useState("");

  const tutorialRef = useRef(null);

  /* SEARCH FILTER */

  const filteredLanguages = Object.keys(languagesData).filter((lang) =>
    lang.toLowerCase().includes(search.toLowerCase()),
  );

  /* OUTSIDE CLICK */

  useEffect(() => {
    function handleClickOutside(event) {
      if (tutorialRef.current && !tutorialRef.current.contains(event.target)) {
        setShowTutorials(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="w-full h-20
      border-b border-gray-800
      bg-black/70 backdrop-blur-lg
      flex items-center justify-between
      px-10 sticky top-0 z-50"
    >
      {/* LEFT SIDE */}

      <div
        className="flex items-center
        gap-14"
      >
        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center
          gap-2 cursor-pointer"
        >
          <Code2 className="text-blue-500" size={32} />

          <h1
            className="text-3xl
            font-bold text-white"
          >
            Codera
          </h1>
        </Link>

        {/* NAV LINKS */}

        <div
          className="hidden md:flex
          items-center gap-8
          text-gray-300
          font-medium"
        >
          {/* TUTORIALS */}

          <div className="relative" ref={tutorialRef}>
            <button
              onClick={() => setShowTutorials(!showTutorials)}
              className={`transition

              ${showTutorials ? "text-blue-500" : "hover:text-blue-500"}`}
            >
              Tutorials
            </button>

            {showTutorials && (
              <div>
                <TutorialDropdown setShowTutorials={setShowTutorials} />
              </div>
            )}
          </div>

          {/* PLAYGROUND */}

          <Link
            to="/playground"
            className="hover:text-blue-500
            transition"
          >
            Playground
          </Link>

          {/* ABOUT */}

          <Link
            to="/challenges"
            className="hover:text-blue-500
  transition"
          >
            Challenges
          </Link>
        </div>
      </div>

      {/* SEARCH BAR */}

      <div
        className="relative
        hidden lg:block"
      >
        {/* SEARCH BOX */}

        <div
          className="flex items-center
          bg-[#1a1a1a]
          border border-gray-700
          rounded-2xl
          px-4 py-3
          w-[320px]
          hover:border-blue-500
          focus-within:border-blue-500
          transition"
        >
          <Search className="text-gray-400" size={18} />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search languages..."
            className="bg-transparent
            outline-none
            text-white
            ml-3 w-full
            placeholder:text-gray-500"
          />
        </div>

        {/* SEARCH RESULTS */}

        {search.length > 0 && (
          <div
            className="absolute
            top-[72px]
            left-0
            w-full
            bg-[#0f0f0f]
            border border-gray-800
            rounded-3xl
            overflow-hidden
            shadow-[0_0_40px_rgba(59,130,246,0.12)]
            z-[999]"
          >
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang, index) => (
                <Link
                  key={index}
                  to={`/learn/${lang}`}
                  onClick={() => setSearch("")}
                  className="block
                    px-6 py-4
                    text-gray-300
                    hover:bg-[#181818]
                    hover:text-blue-400
                    transition
                    capitalize"
                >
                  {lang}
                </Link>
              ))
            ) : (
              <div
                className="px-6 py-4
                text-gray-500"
              >
                No language found
              </div>
            )}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}

      <div
        className="flex items-center
        gap-4"
      >
        

        {/* CTA */}

        <Link to="/playground">
          <button
            className="bg-blue-600
            hover:bg-blue-700
            transition
            px-6 py-3
            rounded-2xl
            text-white
            font-medium
            shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          >
            Start Coding
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
