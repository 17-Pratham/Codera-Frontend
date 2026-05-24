import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {

  return (

    <section
      className="
      w-full
      bg-black
      text-white

      flex items-center justify-between

      px-10 lg:px-24

      pt-10
      pb-20

      min-h-[calc(100vh-80px)]

      overflow-hidden
      "
    >

      {/* LEFT SIDE */}

      <div
        className="
        max-w-2xl

        flex flex-col
        justify-center
        "
      >

        {/* BADGE */}

        <div
          className="
          flex items-center gap-2

          bg-[#111]

          border border-gray-800

          px-4 py-2
          rounded-full

          w-fit

          mb-8
          "
        >

          <Sparkles
            className="text-blue-500"
            size={18}
          />

          <p
            className="
            text-sm
            text-gray-300
            "
          >

            Interactive Coding Playground

          </p>

        </div>

        {/* HEADING */}

        <h1
          className="
          text-5xl
          lg:text-7xl

          font-bold

          leading-[1.1]
          "
        >

          Code.

          <span className="text-blue-500">

            {" "}Learn{" "}

          </span>

          Build.

        </h1>

        {/* DESCRIPTION */}

        <p
          className="
          text-gray-400
          text-lg

          mt-8

          leading-relaxed

          max-w-xl
          "
        >

          Write, run, and experiment with code
          instantly in multiple programming
          languages using Codera’s secure
          sandbox environment.

        </p>

        {/* BUTTONS */}

        <div
          className="
          flex gap-5

          mt-10
          "
        >

          <button
            className="
            bg-blue-600
            hover:bg-blue-700

            transition

            px-7 py-4

            rounded-2xl

            text-lg
            font-medium

            flex items-center gap-2
            "
          >

            Start Coding

            <ArrowRight size={20} />

          </button>

          <button
            className="
            border border-gray-700

            hover:border-blue-500

            transition

            px-7 py-4

            rounded-2xl

            text-lg
            "
          >

            Explore Languages

          </button>

        </div>

        {/* STATS */}

        <div
          className="
          flex gap-10

          mt-14
          "
        >

          <div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >

              6+

            </h2>

            <p className="text-gray-400">

              Languages

            </p>

          </div>

          <div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >

              Fast

            </h2>

            <p className="text-gray-400">

              Execution

            </p>

          </div>

          <div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >

              Secure

            </h2>

            <p className="text-gray-400">

              Sandbox

            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div
        className="
        hidden lg:flex

        relative

        items-center
        justify-center
        "
      >

        {/* GLOW */}

        <div
          className="
          absolute

          w-[500px]
          h-[500px]

          bg-blue-600/20

          blur-[120px]

          rounded-full
          "
        />

        {/* EDITOR CARD */}

        <div
          className="
          relative

          bg-[#111]

          border border-gray-800

          rounded-3xl

          p-6

          w-[550px]

          shadow-2xl
          "
        >

          {/* TOP BAR */}

          <div
            className="
            flex gap-2

            mb-6
            "
          >

            <div className="w-3 h-3 rounded-full bg-red-500" />

            <div className="w-3 h-3 rounded-full bg-yellow-500" />

            <div className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          {/* CODE */}

          <pre
            className="
            text-sm

            leading-8

            text-gray-300

            overflow-hidden
            "
          >
{`def greet(name):

    return f"Hello {name}"

print(greet("Pratham"))`}
          </pre>

          {/* OUTPUT */}

          <div
            className="
            mt-8

            bg-black

            border border-gray-800

            rounded-2xl

            p-4
            "
          >

            <p className="text-green-400">

              Hello Pratham

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;