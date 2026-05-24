import { useState } from "react";

import {
  Play,
  Terminal,
  Sparkles,
} from "lucide-react";

function LivePreview() {

  const [code, setCode] = useState(
`print("Hello Codera")`
  );

  const [output, setOutput] = useState("");

  const runCode = () => {

    if (code.includes("Hello")) {

      setOutput("Hello Codera");

    } else {

      setOutput("Code Executed Successfully ✅");

    }

  };

  return (

    <section
      className="bg-black text-white
      px-10 lg:px-24 pb-32
      relative overflow-hidden"
    >

      {/* GLOW */}

      <div
        className="absolute
        w-[500px] h-[500px]
        bg-blue-600/10
        blur-[140px]
        rounded-full
        top-[-200px]
        right-[-100px]"
      />

      <div
        className="grid
        grid-cols-1
        lg:grid-cols-2
        gap-16
        items-center"
      >

        {/* LEFT SIDE */}

        <div className="relative">

          {/* BADGE */}

          <div
            className="flex items-center
            gap-3
            bg-[#111]
            border border-gray-800
            px-5 py-3
            rounded-full
            w-fit"
          >

            <Sparkles
              className="text-blue-500"
              size={18}
            />

            <p className="text-gray-300">

              Interactive Playground

            </p>

          </div>

          {/* HEADING */}

          <h1
            className="text-5xl lg:text-7xl
            font-bold leading-tight
            mt-10"
          >

            Try Codera
            <span className="text-blue-500">

              {" "}Instantly

            </span>

          </h1>

          {/* DESCRIPTION */}

          <p
            className="text-gray-400
            text-lg leading-relaxed
            mt-8 max-w-2xl"
          >

            Write and execute code directly
            from the homepage using Codera’s
            secure and beginner-friendly
            coding playground.

          </p>

          {/* FEATURES */}

          <div
            className="flex flex-wrap
            gap-5 mt-10"
          >

            <div
              className="bg-[#111]
              border border-gray-800
              px-5 py-3
              rounded-2xl"
            >

              Instant Execution

            </div>

            <div
              className="bg-[#111]
              border border-gray-800
              px-5 py-3
              rounded-2xl"
            >

              Secure Sandbox

            </div>

            <div
              className="bg-[#111]
              border border-gray-800
              px-5 py-3
              rounded-2xl"
            >

              Multi-language Support

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="relative
          bg-gradient-to-br
          from-[#111]
          to-[#0a0a0a]
          border border-gray-800
          rounded-[35px]
          overflow-hidden"
        >

          {/* TOP BAR */}

          <div
            className="flex items-center
            justify-between
            px-6 py-5
            border-b border-gray-800"
          >

            {/* DOTS */}

            <div className="flex gap-2">

              <div className="w-3 h-3 rounded-full bg-red-500" />

              <div className="w-3 h-3 rounded-full bg-yellow-500" />

              <div className="w-3 h-3 rounded-full bg-green-500" />

            </div>

            {/* LANGUAGE */}

            <div
              className="bg-blue-600/10
              border border-blue-500/20
              px-4 py-2
              rounded-xl
              text-sm text-blue-400"
            >

              Python

            </div>

          </div>

          {/* EDITOR */}

          <div className="p-6">

            <textarea

              value={code}

              onChange={(e) =>
                setCode(e.target.value)
              }

              className="w-full
              h-[220px]
              bg-transparent
              outline-none
              resize-none
              text-green-400
              text-lg
              font-mono"

            />

            {/* RUN BUTTON */}

            <button

              onClick={runCode}

              className="mt-6
              bg-blue-600
              hover:bg-blue-700
              transition
              px-7 py-4
              rounded-2xl
              font-medium
              flex items-center
              gap-3"

            >

              <Play size={20} />

              Run Code

            </button>

            {/* OUTPUT */}

            <div
              className="mt-8
              bg-black/70
              border border-gray-800
              rounded-2xl
              overflow-hidden"
            >

              {/* OUTPUT HEADER */}

              <div
                className="flex items-center
                gap-3
                px-5 py-4
                border-b border-gray-800"
              >

                <Terminal
                  size={18}
                  className="text-blue-500"
                />

                <p className="text-gray-300">

                  Output

                </p>

              </div>

              {/* OUTPUT TEXT */}

              <div className="p-5">

                <pre
                  className="text-green-400
                  font-mono
                  whitespace-pre-wrap"
                >

                  {output || "Run code to see output..."}

                </pre>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LivePreview;