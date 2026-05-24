import Navbar
from "../components/Navbar/Navbar";

import Footer
from "../components/Footer/Footer";

import {
  Code2,
  Flame,
  Trophy,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  challengesData,
} from "../data/challengesData";

function Challenges() {

  const [
    activeDifficulty,

    setActiveDifficulty,

  ] = useState("All");

  const [
    activeLanguage,

    setActiveLanguage,

  ] = useState("All");

  const [
    search,

    setSearch,

  ] = useState("");

  /* DIFFICULTIES */

  const difficulties = [

    "All",

    "Easy",

    "Medium",

    "Hard",

  ];

  /* DYNAMIC LANGUAGES */

  const languages = [

    "All",

    ...new Set(

      challengesData.map(
        (challenge) =>
          challenge.language
      )

    ),

  ];

  /* FILTERED CHALLENGES */

  const filteredChallenges =
    challengesData.filter(
      (challenge) => {

        /* DIFFICULTY */

        const difficultyMatch =

          activeDifficulty ===
          "All"

          ||

          challenge.difficulty ===
          activeDifficulty;

        /* LANGUAGE */

        const languageMatch =

          activeLanguage ===
          "All"

          ||

          challenge.language ===
          activeLanguage;

        /* SEARCH */

        const searchMatch =

          challenge.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        return (

          difficultyMatch &&

          languageMatch &&

          searchMatch

        );

      }
    );

  return (

    <div
      className="bg-black
      text-white
      min-h-screen"
    >

      <Navbar />

      {/* HERO */}

      <section
        className="relative
        px-8 lg:px-24
        pt-10 pb-20
        overflow-hidden"
      >

        {/* GLOW */}

        <div
          className="absolute
          w-[700px]
          h-[700px]
          bg-blue-600/10
          blur-[180px]
          rounded-full
          top-[-250px]
          right-[-200px]"
        />

        <div
          className="relative z-10"
        >

          {/* BADGE */}

          <div
            className="inline-flex
            items-center gap-3
            bg-blue-600/10
            border border-blue-500/20
            rounded-full
            px-6 py-3
            text-blue-400"
          >

            <Flame size={18} />

            Practice • Improve • Compete

          </div>

          {/* TITLE */}

          <h1
            className="text-6xl
            lg:text-8xl
            font-black
            leading-tight
            mt-10
            max-w-6xl"
          >

            Master coding through
            interactive
            {" "}

            <span
              className="text-blue-500"
            >

              real-world

            </span>

            {" "}

            challenges.

          </h1>

          {/* DESC */}

          <p
            className="text-gray-400
            text-xl
            leading-relaxed
            mt-10
            max-w-4xl"
          >

            Solve coding problems,
            improve logic building,
            sharpen programming
            skills and become a
            better developer through
            hands-on practice.

          </p>

          {/* STATS */}

          <div
            className="grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            mt-20"
          >

            {[

              {
                number: "150+",
                label: "Challenges",
              },

              {
                number: `${languages.length - 1}+`,
                label: "Languages",
              },

              {
                number: "24/7",
                label: "Practice",
              },

              {
                number: "10k+",
                label: "Submissions",
              },

            ].map((item, index) => (

              <div

                key={index}

                className="bg-[#101010]
                border border-gray-800
                rounded-[30px]
                p-8
                hover:border-blue-500/30
                transition"

              >

                <h2
                  className="text-5xl
                  font-black
                  text-blue-500"
                >

                  {item.number}

                </h2>

                <p
                  className="text-gray-400
                  mt-4"
                >

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FILTERS */}

      <section
        className="px-8 lg:px-24"
      >

        <div
          className="bg-[#0f0f0f]
          border border-gray-800
          rounded-[35px]
          p-6"
        >

          {/* TOP */}

          <div
            className="flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6"
          >

            {/* SEARCH */}

            <div
              className="flex
              items-center
              bg-black
              border border-gray-800
              rounded-2xl
              px-5 py-4
              w-full
              lg:w-[420px]"
            >

              <Search
                className="text-gray-500"
                size={20}
              />

              <input

                type="text"

                value={search}

                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }

                placeholder="Search challenges..."

                className="bg-transparent
                outline-none
                text-white
                ml-4
                w-full"

              />

            </div>

            {/* FILTER */}

            <div
              className="flex
              items-center gap-3
              text-gray-400"
            >

              <Filter size={18} />

              Filter Challenges

            </div>

          </div>

          {/* DIFFICULTY */}

          <div
            className="flex
            flex-wrap gap-4
            mt-8"
          >

            {difficulties.map(
              (item, index) => (

              <button

                key={index}

                onClick={() =>
                  setActiveDifficulty(
                    item
                  )
                }

                className={`px-6 py-3
                rounded-2xl
                border transition

                ${
                  activeDifficulty ===
                  item

                  ? "bg-blue-600 border-blue-600 text-white"

                  : "bg-black border-gray-800 hover:border-blue-500"
                }`}
              >

                {item}

              </button>

            ))}

          </div>

          {/* LANGUAGES */}

          <div
            className="flex
            flex-wrap gap-3
            mt-8"
          >

            {languages.map(
              (lang, index) => (

              <button

                key={index}

                onClick={() =>
                  setActiveLanguage(
                    lang
                  )
                }

                className={`px-5 py-2
                rounded-full
                transition
                border

                ${
                  activeLanguage ===
                  lang

                  ? "bg-blue-600 border-blue-600 text-white"

                  : "bg-black border-gray-800 text-gray-400 hover:border-blue-500 hover:text-blue-400"
                }`}
              >

                {lang}

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* CHALLENGES */}

      <section
        className="px-8 lg:px-24
        py-20"
      >

        {/* RESULTS */}

        <div
          className="flex
          items-center
          justify-between
          mb-10"
        >

          <h2
            className="text-3xl
            font-black"
          >

            {filteredChallenges.length}
            {" "}
            Challenges Found

          </h2>

          <div
            className="text-gray-400"
          >

            {activeDifficulty}
            {" • "}
            {activeLanguage}

          </div>

        </div>

        {/* GRID */}

        <div
          className="grid
          grid-cols-1
          xl:grid-cols-2
          gap-8"
        >

          {filteredChallenges.map(
            (challenge) => (

            <div

              key={challenge.id}

              className="group
              bg-[#101010]
              border border-gray-800
              hover:border-blue-500/40
              rounded-[35px]
              p-10
              transition-all duration-300
              hover:-translate-y-1"

            >

              {/* TOP */}

              <div
                className="flex
                items-start
                justify-between"
              >

                <div
                  className="flex
                  items-start gap-5"
                >

                  {/* ICON */}

                  <div
                    className="w-16 h-16
                    rounded-2xl
                    bg-blue-600/10
                    flex items-center
                    justify-center
                    shrink-0"
                  >

                    <Code2
                      className="text-blue-500"
                      size={30}
                    />

                  </div>

                  {/* INFO */}

                  <div>

                    <h2
                      className="text-3xl
                      font-bold"
                    >

                      {challenge.title}

                    </h2>

                    <div
                      className="flex
                      flex-wrap
                      items-center
                      gap-3
                      mt-4"
                    >

                      <span
                        className="text-gray-500"
                      >

                        {
                          challenge.category
                        }

                      </span>

                      <span
                        className="w-1.5
                        h-1.5
                        rounded-full
                        bg-gray-700"
                      />

                      <span
                        className="text-blue-400"
                      >

                        {
                          challenge.language
                        }

                      </span>

                    </div>

                  </div>

                </div>

                {/* DIFFICULTY */}

                <div
                  className={`px-5 py-2
                  rounded-full
                  text-sm font-semibold

                  ${
                    challenge.difficulty
                    === "Easy"

                    ? "bg-green-500/10 text-green-400"

                    : challenge.difficulty
                    === "Medium"

                    ? "bg-yellow-500/10 text-yellow-400"

                    : "bg-red-500/10 text-red-400"
                  }`}
                >

                  {
                    challenge.difficulty
                  }

                </div>

              </div>

              {/* DESCRIPTION */}

              <p
                className="text-gray-400
                leading-relaxed
                mt-8
                text-lg"
              >

                {
                  challenge.description
                }

              </p>

              {/* BOTTOM */}

              <div
                className="flex
                items-center
                justify-between
                mt-10"
              >

                {/* XP */}

                <div
                  className="flex
                  items-center gap-3"
                >

                  <Trophy
                    className="text-yellow-400"
                    size={20}
                  />

                  <span
                    className="text-gray-300"
                  >

                    +{challenge.xp} XP

                  </span>

                </div>

                {/* BUTTON */}

                <Link
                  to={`/challenge/${challenge.id}`}
                >

                  <button
                    className="group
                    flex items-center
                    gap-3
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                    px-6 py-3
                    rounded-2xl
                    shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                  >

                    Solve Challenge

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />

                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* EMPTY STATE */}

        {filteredChallenges.length === 0 && (

          <div
            className="text-center
            py-32"
          >

            <h2
              className="text-5xl
              font-black"
            >

              No Challenges Found

            </h2>

            <p
              className="text-gray-500
              mt-6 text-xl"
            >

              Try different filters
              or search keywords.

            </p>

          </div>

        )}

      </section>

      <Footer />

    </div>

  );

}

export default Challenges;