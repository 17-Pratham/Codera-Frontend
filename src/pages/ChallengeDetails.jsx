import { useParams } from "react-router-dom";

import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

import Editor from "@monaco-editor/react";

import Confetti from "react-confetti";

import {
  Play,
  CheckCircle2,
  XCircle,
  Trophy,
  Flame,
  Code2,
} from "lucide-react";

import { challengesData } from "../data/challengesData";

function ChallengeDetails() {
  const { id } = useParams();

  const challenge = challengesData.find((item) => item.id === Number(id));

  const [code, setCode] = useState(challenge?.starterCode || "");

  const [output, setOutput] = useState("");

  const [status, setStatus] = useState("");

  const [showXP, setShowXP] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  const [testResults, setTestResults] = useState([]);

  /* NOT FOUND */

  if (!challenge) {
    return (
      <div
        className="bg-black
        text-white
        min-h-screen
        flex items-center
        justify-center
        text-4xl
        font-black"
      >
        Challenge Not Found
      </div>
    );
  }

  /* SAFE EXECUTION */

  const executeCode = () => {
    try {
      let consoleOutput = "";

      let safeCode = code.replaceAll("print(", "console.log(");

      safeCode = safeCode.replaceAll("window.print", "");

      const originalConsoleLog = console.log;

      console.log = (...args) => {
        consoleOutput += args.join(" ") + "\n";
      };

      new Function(safeCode)();

      console.log = originalConsoleLog;

      return {
        success: true,

        output: consoleOutput,
      };
    } catch (error) {
      return {
        success: false,

        output: error.message,
      };
    }
  };

  /* RUN CODE */

  const runCode = () => {
    const result = executeCode();

    setOutput(result.output);

    setStatus("");
  };

  /* SUBMIT CODE */

  const submitCode = () => {
    const result = executeCode();

    setOutput(result.output);

    if (!result.success) {
      setStatus("error");

      return;
    }

    const cleanedOutput = result.output.trim();

    const expected = challenge.expectedOutput.trim();

    const passed = cleanedOutput === expected;

    setTestResults([
      {
        id: 1,
        passed,
        expected,
        output: cleanedOutput,
      },
    ]);

    if (passed) {
      setStatus("success");

      setShowXP(true);
      setShowConfetti(true);

      setTimeout(() => {
        setShowXP(false);

        setShowConfetti(false);
      }, 5000);
    } else {
      setStatus("failed");
    }
  };

  return (
    <div
      className="bg-black
      text-white
      min-h-screen"
    >
      {/* CONFETTI */}

      {showConfetti && <Confetti />}

      <Navbar />

      {/* XP POPUP */}

      {showXP && (
        <div
          className="fixed
          top-24 right-10
          z-[999]
          bg-green-500
          text-white
          px-8 py-5
          rounded-3xl
          shadow-[0_0_40px_rgba(34,197,94,0.6)]
          animate-bounce"
        >
          🎉 +{challenge.xp} XP Earned
        </div>
      )}

      <div
        className="grid
        grid-cols-1
        lg:grid-cols-2"
      >
        {/* LEFT SIDE */}

        <div
          className="border-r
          border-gray-800
          px-8 lg:px-12
          py-14"
        >
          {/* TITLE */}

          <div
            className="flex
            items-center
            justify-between"
          >
            <div>
              <div
                className="flex
                items-center gap-3"
              >
                <Code2 className="text-blue-500" size={30} />

                <h1
                  className="text-5xl
                  font-black"
                >
                  {challenge.title}
                </h1>
              </div>

              <p
                className="text-gray-500
                mt-5 text-lg"
              >
                {challenge.category}
              </p>
            </div>

            {/* DIFFICULTY */}

            <div
              className={`px-5 py-2
              rounded-full
              text-sm font-semibold

              ${
                challenge.difficulty === "Easy"
                  ? "bg-green-500/10 text-green-400"
                  : challenge.difficulty === "Medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-red-500/10 text-red-400"
              }`}
            >
              {challenge.difficulty}
            </div>
          </div>

          {/* STATS */}

          <div
            className="grid
            grid-cols-3
            gap-5
            mt-12"
          >
            <div
              className="bg-[#101010]
              border border-gray-800
              rounded-3xl
              p-6"
            >
              <Trophy className="text-yellow-400" size={28} />

              <h3
                className="mt-5
                text-3xl
                font-black"
              >
                {challenge.xp}
              </h3>

              <p className="text-gray-500">XP Reward</p>
            </div>

            <div
              className="bg-[#101010]
              border border-gray-800
              rounded-3xl
              p-6"
            >
              <Flame className="text-orange-400" size={28} />

              <h3
                className="mt-5
                text-3xl
                font-black"
              >
                92%
              </h3>

              <p className="text-gray-500">Success Rate</p>
            </div>

            <div
              className="bg-[#101010]
              border border-gray-800
              rounded-3xl
              p-6"
            >
              <CheckCircle2 className="text-green-400" size={28} />

              <h3
                className="mt-5
                text-3xl
                font-black"
              >
                2.1k
              </h3>

              <p className="text-gray-500">Submissions</p>
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="mt-14">
            <h2
              className="text-3xl
              font-bold"
            >
              Problem Statement
            </h2>

            <p
              className="text-gray-400
              leading-relaxed
              mt-6 text-lg"
            >
              {challenge.description}
            </p>
          </div>

          {/* EXAMPLE */}

          <div
            className="mt-14
            bg-[#101010]
            border border-gray-800
            rounded-[30px]
            p-8"
          >
            <h2
              className="text-3xl
              font-bold"
            >
              Example
            </h2>

            <div className="mt-8">
              <p className="text-gray-400">Expected Output</p>

              <div
                className="mt-4
                bg-black
                border border-gray-800
                rounded-2xl
                p-5
                font-mono
                text-green-400"
              >
                {challenge.expectedOutput}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="flex
          flex-col"
        >
          {/* HEADER */}

          <div
            className="flex
            items-center
            justify-between
            border-b border-gray-800
            px-8 py-5"
          >
            <h2
              className="text-2xl
              font-bold"
            >
              Code Editor
            </h2>

            <div
              className="flex
              items-center gap-4"
            >
              {/* RUN */}

              <button
                onClick={runCode}
                className="flex
                items-center gap-2
                bg-[#151515]
                hover:bg-[#1d1d1d]
                border border-gray-700
                px-5 py-3
                rounded-2xl
                transition"
              >
                <Play size={18} />
                Run Code
              </button>

              {/* SUBMIT */}

              <button
                onClick={submitCode}
                className="flex
                items-center gap-2
                bg-blue-600
                hover:bg-blue-700
                px-6 py-3
                rounded-2xl
                transition
                shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              >
                Submit Solution
              </button>
            </div>
          </div>

          {/* EDITOR */}

          <div className="flex-1">
            <Editor
              height="60vh"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
            />
          </div>

          {/* OUTPUT */}

          <div
            className="border-t
            border-gray-800
            bg-[#0d0d0d]
            px-8 py-6"
          >
            <div
              className="flex
              items-center
              justify-between"
            >
              <h2
                className="text-2xl
                font-bold"
              >
                Output
              </h2>

              {/* STATUS */}

              {status === "success" ? (
                <div
                  className="flex
                  items-center gap-2
                  text-green-400"
                >
                  <CheckCircle2 size={20} />
                  Challenge Completed
                </div>
              ) : status === "failed" ? (
                <div
                  className="flex
                  items-center gap-2
                  text-red-400"
                >
                  <XCircle size={20} />
                  Wrong Answer
                </div>
              ) : status === "error" ? (
                <div
                  className="flex
                  items-center gap-2
                  text-yellow-400"
                >
                  <XCircle size={20} />
                  Runtime Error
                </div>
              ) : null}
            </div>

            {/* PREMIUM RESULT BOX */}

            <div
              className={`mt-6
              rounded-3xl
              p-6
              min-h-[150px]
              border

              ${
                status === "success"
                  ? "bg-green-500/10 border-green-500/30"
                  : status === "failed"
                    ? "bg-red-500/10 border-red-500/30"
                    : status === "error"
                      ? "bg-yellow-500/10 border-yellow-500/30"
                      : "bg-black border-gray-800"
              }`}
            >
              <div
                className="text-2xl
                font-bold"
              >
                {status === "success" && "🎉 Correct Answer"}

                {status === "failed" && "❌ Wrong Answer"}

                {status === "error" && "⚠ Runtime Error"}

                {!status && "Run your code..."}
              </div>

              <div
                className="mt-5
                font-mono
                text-green-400
                whitespace-pre-wrap"
              >
                {output}
              </div>
            </div>

            {/* TEST CASES */}

            <div className="mt-10">
              <h2
                className="text-2xl
                font-bold"
              >
                Test Cases
              </h2>

              <div
                className="mt-5
                space-y-5"
              >
                {testResults.map((test) => (
                  <div
                    key={test.id}
                    className={`p-5
                    rounded-2xl
                    border

                    ${
                      test.passed
                        ? "border-green-500/30 bg-green-500/10"
                        : "border-red-500/30 bg-red-500/10"
                    }`}
                  >
                    <div
                      className="flex
                      items-center
                      justify-between"
                    >
                      <h3 className="font-bold">Test Case {test.id}</h3>

                      <span>{test.passed ? "✅ Passed" : "❌ Failed"}</span>
                    </div>

                    <div className="mt-4">
                      <p className="text-gray-400">Expected:</p>

                      <div
                        className="mt-2
                        font-mono
                        text-green-400"
                      >
                        {test.expected}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-gray-400">Your Output:</p>

                      <div
                        className="mt-2
                        font-mono
                        text-blue-400"
                      >
                        {test.output}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChallengeDetails;
