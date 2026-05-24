import { ArrowUpRight } from "lucide-react";

import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiTypescript,
  SiCplusplusbuilder,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Languages() {

  const navigate = useNavigate();

  const languages = [

    {
      name: "Python",
      value:"python",
      icon: <SiPython size={40} />,
      color: "text-blue-400",
      path: "python",
      description: "Simple and powerful programming language."
    },

    {
      name: "JavaScript",
      value:"javascript",
      icon: <SiJavascript size={40} />,
      color: "text-yellow-300",
      path: "javascript",
      description: "Language of the web."
    },

    {
      name: "C++",
      value:"cpp",
      icon: <SiCplusplusbuilder size={40} />,
      color: "text-cyan-400",
      path: "cpp",
      description: "Fast and efficient system language."
    },

    {
      name: "Java",
      value:"java",
      icon: <FaJava size={40} />,
      color: "text-orange-400",
      path: "java",
      description: "Popular object-oriented language."
    },

    {
      name: "PHP",
      value:"php",
      icon: <SiPhp size={40} />,
      color: "text-purple-400",
      path: "php",
      description: "Backend scripting language."
    },

    {
      name: "TypeScript",
      value:"typescript",
      icon: <SiTypescript size={40} />,
      color: "text-blue-500",
      path: "typescript",
      description: "Typed JavaScript for scalable apps."
    },

  ];

  return (

    <section
      className="bg-black text-white
      px-10 lg:px-24 pb-24"
    >

      {/* TITLE */}

      <div className="text-center">

        <h1
          className="text-5xl font-bold"
        >

          Explore Languages

        </h1>

        <p
          className="text-gray-400
          mt-5 text-lg"
        >

          Start coding instantly in your
          favorite programming language.

        </p>

      </div>

      {/* GRID */}

      <div
        className="grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8 mt-20"
      >

        {languages.map((lang, index) => (

          <div

            key={index}

            onClick={() =>
              navigate(`/learn/${lang.value}`)
            }

            className="group
            bg-[#111]
            border border-gray-800
            hover:border-blue-500
            rounded-3xl
            p-8
            cursor-pointer
            transition duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
          >

            {/* TOP */}

            <div
              className="flex items-center
              justify-between"
            >

              <div className={lang.color}>

                {lang.icon}

              </div>

              <ArrowUpRight
                className="text-gray-500
                group-hover:text-white
                transition"
              />

            </div>

            {/* TEXT */}

            <div className="mt-10">

              <h2
                className="text-2xl
                font-semibold"
              >

                {lang.name}

              </h2>

              <p
                className="text-gray-400
                mt-4 leading-relaxed"
              >

                {lang.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Languages;