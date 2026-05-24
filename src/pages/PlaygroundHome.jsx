import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCplusplus,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

function PlaygroundHome() {

  const navigate = useNavigate();

  const languages = [

    {
      name: "Python",
      value: "python",
      icon: <SiPython size={42} />,
      color: "text-blue-400",
    },

    {
      name: "JavaScript",
      value: "javascript",
      icon: <SiJavascript size={42} />,
      color: "text-yellow-300",
    },

    {
      name: "Java",
      value: "java",
      icon: <FaJava size={42} />,
      color: "text-orange-400",
    },

    {
      name: "C++",
      value: "cpp",
      icon: <SiCplusplus size={42} />,
      color: "text-cyan-400",
    },

    {
      name: "PHP",
      value: "php",
      icon: <SiPhp size={42} />,
      color: "text-purple-400",
    },

    {
      name: "TypeScript",
      value: "typescript",
      icon: <SiTypescript size={42} />,
      color: "text-blue-500",
    },

  ];

  return (

    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}

      <Navbar />

      {/* MAIN SECTION */}

      <div
        className="px-10 lg:px-24
        py-20 relative
        overflow-hidden"
      >

        {/* GLOW */}

        <div
          className="absolute
          w-[500px] h-[500px]
          bg-blue-600/10
          blur-[140px]
          rounded-full
          top-[-200px]
          left-1/2
          -translate-x-1/2"
        />

        {/* HEADER */}

        <div
          className="text-center
          relative z-10"
        >

          <h1
            className="text-5xl lg:text-7xl
            font-bold leading-tight"
          >

            Choose Your
            <span className="text-blue-500">

              {" "}Playground

            </span>

          </h1>

          <p
            className="text-gray-400
            mt-8 text-lg
            max-w-2xl mx-auto"
          >

            Start coding instantly using
            Codera’s secure and interactive
            programming playground.

          </p>

        </div>

        {/* LANGUAGES */}

        <div
          className="grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-24
          relative z-10"
        >

          {languages.map((lang, index) => (

            <div

              key={index}

              onClick={() =>
                navigate(
                  `/playground/${lang.value}`
                )
              }

              className="group
              cursor-pointer
              bg-gradient-to-br
              from-[#111]
              to-[#0a0a0a]
              border border-gray-800
              hover:border-blue-500
              transition duration-300
              rounded-[32px]
              p-10
              overflow-hidden
              relative
              hover:-translate-y-3"

            >

              {/* GLOW */}

              <div
                className="absolute
                w-[180px] h-[180px]
                bg-blue-500/10
                blur-[90px]
                rounded-full
                top-[-50px]
                right-[-50px]"
              />

              {/* ICON */}

              <div
                className={`relative z-10
                ${lang.color}`}
              >

                {lang.icon}

              </div>

              {/* TITLE */}

              <h2
                className="relative z-10
                text-3xl
                font-bold mt-8"
              >

                {lang.name}

              </h2>

              {/* DESC */}

              <p
                className="relative z-10
                text-gray-400
                mt-5 leading-relaxed"
              >

                Open the {lang.name} playground
                and start writing code instantly.

              </p>

              {/* BUTTON */}

              <div
                className="relative z-10
                mt-8"
              >

                <button
                  className="bg-blue-600/10
                  border border-blue-500/20
                  px-5 py-3
                  rounded-2xl
                  text-blue-400"
                >

                  Open Playground

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default PlaygroundHome;