import { ShieldCheck, Zap, Code2, Rocket, Globe, BookOpen } from "lucide-react";

function WhyCodera() {
  return (
    <section
      className="bg-black text-white
      px-10 lg:px-24 pb-24"
    >
      {/* HEADER */}

      <div className="text-center">
        <h1
          className="text-5xl lg:text-6xl
          font-bold"
        >
          Why Codera?
        </h1>

        <p
          className="text-gray-400
          mt-6 text-lg"
        >
          A modern coding playground built for learning, experimenting, and
          growing as a developer.
        </p>
      </div>

      {/* BENTO GRID */}

      <div
        className="grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-6 mt-20"
      >
        {/* BIG CARD */}

        {/* BIG CARD */}

        <div
          className="lg:col-span-2
  lg:row-span-2
  bg-gradient-to-br
  from-blue-600/20
  to-black
  border border-blue-500/20
  rounded-3xl
  p-10
  relative overflow-hidden"
        >
          {/* GLOW */}

          <div
            className="absolute
    w-[300px] h-[300px]
    bg-blue-500/20
    blur-[100px]
    rounded-full
    top-[-80px]
    right-[-80px]"
          />

          {/* ICON */}

          <ShieldCheck size={55} className="text-blue-500" />

          {/* TITLE */}

          <h2
            className="text-4xl
    font-bold mt-10"
          >
            Secure Sandbox Execution
          </h2>

          {/* DESCRIPTION */}

          <p
            className="text-gray-300
    mt-6 leading-relaxed
    text-lg"
          >
            Every program runs safely inside isolated Docker containers,
            ensuring secure and reliable code execution for all users.
          </p>

          {/* SECURITY TAGS */}

          <div
            className="flex flex-wrap
    gap-4 mt-8"
          >
            <div
              className="bg-blue-500/10
      border border-blue-500/20
      px-4 py-2 rounded-xl
      text-sm text-blue-300"
            >
              Docker Isolated
            </div>

            <div
              className="bg-green-500/10
      border border-green-500/20
      px-4 py-2 rounded-xl
      text-sm text-green-300"
            >
              Safe Execution
            </div>

            <div
              className="bg-purple-500/10
      border border-purple-500/20
      px-4 py-2 rounded-xl
      text-sm text-purple-300"
            >
              Resource Controlled
            </div>
          </div>

          {/* FLOW */}

          <div
            className="flex items-center
    gap-4 mt-10
    text-sm text-gray-400"
          >
            <div
              className="bg-[#111]
      border border-gray-800
      px-4 py-3 rounded-xl"
            >
              Code
            </div>
            →
            <div
              className="bg-[#111]
      border border-gray-800
      px-4 py-3 rounded-xl"
            >
              Docker
            </div>
            →
            <div
              className="bg-[#111]
      border border-gray-800
      px-4 py-3 rounded-xl"
            >
              Secure Run
            </div>
            →
            <div
              className="bg-[#111]
      border border-gray-800
      px-4 py-3 rounded-xl"
            >
              Output
            </div>
          </div>

          {/* TERMINAL */}

          <div
            className="mt-10
    bg-black/70
    border border-gray-800
    rounded-2xl
    p-6"
          >
            <div className="flex gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500" />

              <div className="w-3 h-3 rounded-full bg-yellow-500" />

              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <pre
              className="text-green-400
      text-sm leading-7"
            >
              {`> Initializing Sandbox...

> Running inside Docker Container...

> Execution Successful ✅`}
            </pre>
          </div>
        </div>

        {/* SMALL CARD */}

        <div
          className="bg-[#111]
          border border-gray-800
          rounded-3xl
          p-8
          hover:border-blue-500
          transition"
        >
          <Zap size={42} className="text-yellow-400" />

          <h2
            className="text-2xl
            font-semibold mt-8"
          >
            Instant Execution
          </h2>

          <p
            className="text-gray-400
            mt-4"
          >
            Run programs instantly without any setup or installation.
          </p>
        </div>

        {/* SMALL CARD */}

        <div
          className="bg-[#111]
          border border-gray-800
          rounded-3xl
          p-8
          hover:border-blue-500
          transition"
        >
          <Code2 size={42} className="text-cyan-400" />

          <h2
            className="text-2xl
            font-semibold mt-8"
          >
            Multi-language Support
          </h2>

          <p
            className="text-gray-400
            mt-4"
          >
            Practice coding in Python, JavaScript, Java, C++, PHP and more.
          </p>
        </div>

        {/* WIDE CARD */}

        <div
          className="lg:col-span-2
          bg-gradient-to-r
          from-[#111]
          to-[#161616]
          border border-gray-800
          rounded-3xl
          p-8
          flex flex-col lg:flex-row
          items-start lg:items-center
          justify-between gap-10"
        >
          <div>
            <Rocket size={45} className="text-blue-500" />

            <h2
              className="text-3xl
              font-bold mt-6"
            >
              Fast & Responsive Experience
            </h2>

            <p
              className="text-gray-400
              mt-4 max-w-xl"
            >
              Built using modern technologies like React, Django, Docker and
              Tailwind CSS for smooth and powerful performance.
            </p>
          </div>

          <div
            className="bg-blue-600/10
            border border-blue-500/20
            rounded-2xl
            px-8 py-6"
          >
            <h1
              className="text-5xl
              font-bold text-blue-500"
            >
              6+
            </h1>

            <p
              className="text-gray-300
              mt-2"
            >
              Languages Supported
            </p>
          </div>
        </div>

        {/* SMALL CARD */}

       
      </div>
    </section>
  );
}

export default WhyCodera;
