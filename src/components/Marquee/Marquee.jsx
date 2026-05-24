import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCplusplusbuilder,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

function Marquee() {

  const languages = [

    {
      name: "Python",
      icon: <SiPython />,
      color: "text-blue-400",
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-300",
    },

    {
      name: "Java",
      icon: <FaJava />,
      color: "text-orange-400",
    },

    {
      name: "C++",
      icon: <SiCplusplusbuilder />,
      color: "text-cyan-400",
    },

    {
      name: "PHP",
      icon: <SiPhp />,
      color: "text-purple-400",
    },

    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-blue-500",
    },

  ];

  return (

    <section
      className="bg-black
      py-10
      overflow-hidden"
    >

      {/* TITLE */}

      <div className="text-center mb-12">

        <h1
          className="text-white
          text-4xl lg:text-5xl
          font-bold"
        >

          Supported Languages

        </h1>

        <p
          className="text-gray-400
          mt-5 text-lg"
        >

          Practice coding across multiple
          modern programming languages.

        </p>

      </div>

      {/* MARQUEE */}

      <div
        className="relative
        w-full overflow-hidden"
      >

        <div
          className="flex
          gap-8
          whitespace-nowrap
          animate-[scroll_20s_linear_infinite]"
        >

          {[...languages, ...languages].map((lang, index) => (

            <div
              key={index}

              className="flex items-center
              gap-4
              bg-gradient-to-br
              from-[#111]
              to-[#0a0a0a]
              border border-gray-800
              hover:border-blue-500
              transition
              px-8 py-5
              rounded-2xl
              min-w-fit"
            >

              <div
                className={`text-3xl ${lang.color}`}
              >

                {lang.icon}

              </div>

              <h2
                className="text-white
                text-xl font-semibold"
              >

                {lang.name}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Marquee;