import {
  Code2,
  Terminal,
  Rocket,
  ArrowRight,
} from "lucide-react";

function HowItWorks() {

  const steps = [

    {
      icon: <Code2 size={34} />,
      title: "Choose Language",
      description:
        "Select Python, JavaScript, Java, C++, PHP and more instantly.",
    },

    {
      icon: <Terminal size={34} />,
      title: "Write Code",
      description:
        "Use Codera’s modern editor to practice and experiment freely.",
    },

    {
      icon: <Rocket size={34} />,
      title: "Run Securely",
      description:
        "Execute programs safely inside isolated Docker containers.",
    },

  ];

  return (

    <section
      className="bg-black text-white
      px-10 lg:px-24 pb-28
      relative overflow-hidden"
    >

      {/* TOP GLOW */}

      <div
        className="absolute
        w-[500px] h-[500px]
        bg-blue-600/10
        blur-[150px]
        rounded-full
        top-[-250px]
        left-1/2
        -translate-x-1/2"
      />

      {/* HEADER */}

      <div className="text-center relative">

        <h1
          className="text-5xl lg:text-6xl
          font-bold"
        >

          How Codera Works

        </h1>

        <p
          className="text-gray-400
          mt-6 text-lg"
        >

          Start coding instantly in a secure
          and beginner-friendly environment.

        </p>

      </div>

      {/* PROCESS STRIP */}

      <div
        className="relative
        mt-24"
      >

        {/* LINE */}

        <div
          className="hidden lg:block
          absolute top-1/2 left-0
          w-full h-[2px]
          bg-gradient-to-r
          from-blue-500/20
          via-blue-500
          to-purple-500/20"
        />

        {/* STEPS */}

        <div
          className="grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
          relative"
        >

          {steps.map((step, index) => (

            <div
              key={index}

              className="relative
              group"
            >

              {/* CARD */}

              <div
                className="relative
                bg-gradient-to-br
                from-[#111]
                to-[#0a0a0a]
                border border-gray-800
                hover:border-blue-500
                transition duration-300
                rounded-[32px]
                p-10
                overflow-hidden
                hover:-translate-y-2"
              >

                {/* GLOW */}

                <div
                  className="absolute
                  w-[180px] h-[180px]
                  bg-blue-500/10
                  blur-[80px]
                  rounded-full
                  top-[-50px]
                  right-[-50px]"
                />

                {/* STEP NUMBER */}

                <div
                  className="absolute
                  top-6 right-6
                  text-7xl
                  font-bold
                  text-white/[0.03]"
                >

                  0{index + 1}

                </div>

                {/* ICON */}

                <div
                  className="relative z-10
                  w-16 h-16
                  rounded-2xl
                  bg-blue-600/10
                  border border-blue-500/20
                  flex items-center justify-center
                  text-blue-500"
                >

                  {step.icon}

                </div>

                {/* TITLE */}

                <h2
                  className="relative z-10
                  text-3xl
                  font-bold mt-8"
                >

                  {step.title}

                </h2>

                {/* DESCRIPTION */}

                <p
                  className="relative z-10
                  text-gray-400
                  mt-5 leading-relaxed"
                >

                  {step.description}

                </p>

                {/* ARROW */}

                <div
                  className="relative z-10
                  mt-8 flex items-center
                  text-blue-500"
                >

                  <ArrowRight size={22} />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* SUPPORT SECTION */}

      <div
        className="mt-24
        relative
        bg-gradient-to-r
        from-[#111]
        to-[#0b0b0b]
        border border-gray-800
        rounded-[40px]
        overflow-hidden"
      >

        {/* GLOW */}

        <div
          className="absolute
          w-[350px] h-[350px]
          bg-blue-500/10
          blur-[120px]
          rounded-full
          right-[-100px]
          top-[-100px]"
        />

        <div
          className="relative
          px-10 lg:px-16
          py-14
          flex flex-col lg:flex-row
          items-center justify-between
          gap-10"
        >

          {/* LEFT */}

          <div>

            <h1
              className="text-4xl lg:text-5xl
              font-bold leading-tight"
            >

              Stuck While Coding?

            </h1>

            <p
              className="text-gray-400
              mt-6 text-lg
              max-w-2xl leading-relaxed"
            >

              Watch tutorials and explore
              beginner-friendly documentation
              to improve your coding skills
              faster with Codera.

            </p>

          </div>

          {/* BUTTONS */}

          <div
            className="flex flex-col sm:flex-row
            gap-5"
          >

            <button
              className="bg-blue-600
              hover:bg-blue-700
              transition
              px-8 py-4
              rounded-2xl
              text-lg font-medium
              shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >

              Watch Tutorials

            </button>

            <button
              className="border border-gray-700
              hover:border-blue-500
              hover:bg-blue-600/10
              transition
              px-8 py-4
              rounded-2xl
              text-lg"
            >

              Read Docs

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;