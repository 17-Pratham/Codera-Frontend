import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { languagesData } from "../../data/languagesData";

function TutorialDropdown() {
  const languages = Object.keys(languagesData);

  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  const currentLanguage = languagesData[activeLanguage];

  return (
    <div
  className="
  fixed
  top-[82px]
  left-1/2
  -translate-x-1/2

  w-[95vw]
  xl:w-[1180px]
  max-w-[1180px]

  max-h-[85vh]
  overflow-hidden

  bg-[#0b0b0b]/95
  backdrop-blur-2xl
  border border-gray-800
  rounded-[32px]
  shadow-[0_0_120px_rgba(59,130,246,0.12)]
  z-[999]
  "
>
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-12

        max-h-[85vh]
        overflow-hidden
        "
      >
        {/* LEFT SIDEBAR */}

        <div
          className="
          lg:col-span-3

          border-b lg:border-b-0
          lg:border-r border-gray-800

          p-6
          bg-[#090909]

          overflow-y-auto
          max-h-[85vh]

          scrollbar-thin
          scrollbar-thumb-blue-600
          scrollbar-track-transparent
          "
        >
          <div
            className="
            flex items-center
            justify-between
            mb-8
            "
          >
            <div>
              <p
                className="
                text-xs
                tracking-[0.25em]
                uppercase
                text-gray-500
                "
              >
                Explore
              </p>

              <h2
                className="
                text-2xl
                font-bold
                mt-2
                "
              >
                Languages
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            {languages.map((lang, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveLanguage(lang)}
                className={`
                group
                flex items-center
                justify-between

                px-5 py-4

                rounded-2xl
                cursor-pointer

                transition-all duration-300

                ${
                  activeLanguage === lang
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "hover:bg-[#161616] text-gray-300"
                }
                `}
              >
                <div
                  className="
                  flex items-center
                  gap-3
                  "
                >
                  <div
                    className={`
                    w-2 h-2
                    rounded-full
                    transition

                    ${
                      activeLanguage === lang
                        ? "bg-white"
                        : "bg-blue-500"
                    }
                    `}
                  />

                  <span
                    className="
                    capitalize
                    text-[17px]
                    font-medium
                    "
                  >
                    {lang}
                  </span>
                </div>

                <ChevronRight
                  size={18}
                  className={`
                  transition

                  ${
                    activeLanguage === lang
                      ? "translate-x-1"
                      : ""
                  }
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION */}

        <div
          className="
          lg:col-span-5

          border-b lg:border-b-0
          lg:border-r border-gray-800

          p-8

          overflow-y-auto
          max-h-[85vh]

          scrollbar-thin
          scrollbar-thumb-blue-600
          scrollbar-track-transparent
          "
        >
          <div
            className="
            flex items-center
            justify-between
            mb-8
            "
          >
            <div>
              <p
                className="
                text-xs
                tracking-[0.25em]
                uppercase
                text-blue-500
                "
              >
                Learning Path
              </p>

              <h2
                className="
                text-3xl
                font-bold
                mt-2
                "
              >
                Popular Tutorials
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {currentLanguage?.roadmapSteps?.map((step, index) => (
              <Link
                key={index}
                to={`/learn/${activeLanguage}`}
                className="
                group
                flex items-center
                justify-between

                bg-[#121212]
                hover:bg-[#181818]

                border border-gray-800
                hover:border-blue-500/40

                transition-all duration-300

                rounded-2xl

                px-5 py-5
                "
              >
                <div>
                  <h3
                    className="
                    text-white
                    text-lg
                    font-semibold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                    text-gray-500
                    text-sm
                    mt-1
                    "
                  >
                    Learn essential concepts and practical usage.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="
                  text-blue-400

                  opacity-0
                  -translate-x-2

                  group-hover:opacity-100
                  group-hover:translate-x-0

                  transition-all
                  "
                />
              </Link>
            ))}
          </div>

          {/* BUTTON */}

          <Link to={`/learn/${activeLanguage}`}>
            <button
              className="
              mt-8
              w-full

              bg-blue-600
              hover:bg-blue-700

              transition

              rounded-2xl

              py-4

              text-white
              font-semibold
              text-lg
              "
            >
              View Full Roadmap
            </button>
          </Link>
        </div>

        {/* RIGHT SECTION */}

        <div
          className="
          lg:col-span-4

          p-8

          overflow-y-auto
          max-h-[85vh]

          scrollbar-thin
          scrollbar-thumb-blue-600
          scrollbar-track-transparent
          "
        >
          <div
            className="
            flex items-center
            justify-between
            mb-8
            "
          >
            <div>
              <p
                className="
                text-xs
                tracking-[0.25em]
                uppercase
                text-blue-500
                "
              >
                Resources
              </p>

              <h2
                className="
                text-3xl
                font-bold
                mt-2
                "
              >
                Reference Materials
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {currentLanguage?.keyFeatures?.map((feature, index) => (
              <Link
                key={index}
                to={`/learn/${activeLanguage}`}
                className="
                group

                bg-[#121212]
                hover:bg-blue-600/10

                border border-gray-800
                hover:border-blue-500/30

                transition-all duration-300

                rounded-2xl

                px-5 py-5

                flex items-center
                justify-between
                "
              >
                <div>
                  <h3
                    className="
                    text-white
                    font-semibold
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                    text-gray-500
                    text-sm
                    mt-1
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="
                  text-blue-400
                  group-hover:translate-x-1
                  transition
                  "
                />
              </Link>
            ))}
          </div>

          {/* PLAYGROUND */}

          <Link to={`/playground/${activeLanguage}`}>
            <div
              className="
              mt-8

              bg-gradient-to-br
              from-blue-600
              to-blue-500

              rounded-[28px]

              p-7

              hover:scale-[1.02]

              transition-all duration-300

              cursor-pointer
              "
            >
              <p
                className="
                text-blue-100
                text-sm
                "
              >
                Interactive Practice
              </p>

              <h2
                className="
                text-3xl
                font-bold
                mt-3
                "
              >
                Open Playground
              </h2>

              <p
                className="
                text-blue-100
                mt-3
                leading-relaxed
                "
              >
                Practice {activeLanguage} directly in Codera's live coding
                environment.
              </p>

              <div
                className="
                mt-6
                flex items-center
                gap-2
                text-white
                "
              >
                Start Coding
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TutorialDropdown;