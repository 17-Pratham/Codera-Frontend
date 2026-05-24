import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import {
  useParams,
  useNavigate,
} from "react-router-dom";

import API from "../api/api";

import {
  Play,
  Terminal,
  Code2,
  BookOpen,
  FileCode2,
} from "lucide-react";

function Playground() {

  const { language } = useParams();

  const navigate = useNavigate();

  const templates = {

    python: `print("Hello World")`,

    javascript: `console.log("Hello World")`,

    cpp:
`#include <iostream>

using namespace std;

int main() {

    cout << "Hello World";

    return 0;
}`,

    java:
`public class Main {

    public static void main(String[] args) {

        System.out.println("Hello World");

    }
}`,

    php:
`<?php

echo "Hello World";

?>`,

    typescript:
`console.log("Hello World");`

  };

  const [code, setCode] = useState(
    templates[language]
  );

  const [output, setOutput] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setCode(
      templates[language]
    );

  }, [language]);

  const runCode = async () => {

    setLoading(true);

    setOutput("");
    setError("");

    try {

      const response = await API.post(
        "run/",
        {
          code: code,
          language: language,
        }
      );

      setOutput(response.data.output);

      setError(response.data.error);

    } catch (error) {

      setError("Something went wrong");

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="bg-black
      text-white
      min-h-screen
      flex flex-col"
    >

      {/* TOP NAVBAR */}

      <div
        className="h-[75px]
        border-b border-gray-800
        px-6
        flex items-center
        justify-between"
      >

        {/* LEFT */}

        <div
          className="flex items-center
          gap-4"
        >

          <div
            className="w-11 h-11
            rounded-2xl
            bg-blue-600/10
            border border-blue-500/20
            flex items-center
            justify-center"
          >

            <Code2
              className="text-blue-500"
              size={24}
            />

          </div>
        <Link to="/">
          <div>

            <h1
              className="text-2xl
              font-bold"
            >

              Codera

            </h1>

            <p
              className="text-sm
              text-gray-400"
            >

              Playground

            </p>

          </div>
        </Link>
        </div>
    
        {/* RIGHT */}

        <div
          className="flex items-center
          gap-5"
        >

          {/* LANGUAGE SELECTOR */}

          <select

            value={language}

            onChange={(e) =>
              navigate(
                `/playground/${e.target.value}`
              )
            }

            className="bg-[#111]
            border border-gray-800
            px-5 py-3
            rounded-2xl
            text-gray-300
            outline-none
            cursor-pointer"

          >

            <option value="python">
              Python
            </option>

            <option value="javascript">
              JavaScript
            </option>

            <option value="cpp">
              C++
            </option>

            <option value="java">
              Java
            </option>

            <option value="php">
              PHP
            </option>

            <option value="typescript">
              TypeScript
            </option>

          </select>

          {/* RUN BUTTON */}

          <button

            onClick={runCode}

            className="bg-blue-600
            hover:bg-blue-700
            transition
            px-7 py-3
            rounded-2xl
            flex items-center
            gap-3
            font-medium
            shadow-[0_0_30px_rgba(59,130,246,0.25)]"

          >

            <Play size={18} />

            {loading
              ? "Running..."
              : "Run Code"}

          </button>

        </div>

      </div>

      {/* MAIN LAYOUT */}

      <div
        className="flex flex-1
        overflow-hidden"
      >

        {/* SIDEBAR */}

        <div
          className="w-[90px]
          border-r border-gray-800
          bg-[#0b0b0b]
          flex flex-col
          items-center
          py-6 gap-6"
        >

          <div
            className="w-14 h-14
            rounded-2xl
            bg-blue-600/10
            border border-blue-500/20
            flex items-center
            justify-center
            text-blue-500
            cursor-pointer"
          >

            <FileCode2 size={24} />

          </div>

          <div
            className="w-14 h-14
            rounded-2xl
            bg-[#111]
            border border-gray-800
            flex items-center
            justify-center
            text-gray-400
            hover:text-blue-500
            hover:border-blue-500
            transition
            cursor-pointer"
          >

            <BookOpen size={24} />

          </div>

        </div>

        {/* EDITOR SECTION */}

        <div
          className="flex-1
          flex flex-col"
        >

          {/* EDITOR HEADER */}

          <div
            className="h-[65px]
            border-b border-gray-800
            flex items-center
            px-6"
          >

            <div
              className="bg-[#111]
              border border-gray-800
              px-5 py-3
              rounded-t-2xl
              text-gray-300"
            >

              main.{language}

            </div>

          </div>

          {/* EDITOR */}

          <div
            className="flex-1
            p-6"
          >

            <div
              className="w-full h-full
              bg-gradient-to-br
              from-[#111]
              to-[#0a0a0a]
              border border-gray-800
              rounded-[30px]
              overflow-hidden"
            >

              <textarea

                value={code}

                onChange={(e) =>
                  setCode(e.target.value)
                }

                className="w-full h-full
                bg-transparent
                outline-none
                resize-none
                text-green-400
                p-8
                font-mono
                text-lg"

              />

            </div>

          </div>

        </div>

        {/* OUTPUT PANEL */}

        <div
          className="w-[400px]
          border-l border-gray-800
          bg-[#0a0a0a]
          flex flex-col"
        >

          {/* OUTPUT HEADER */}

          <div
            className="h-[65px]
            border-b border-gray-800
            flex items-center
            gap-3
            px-6"
          >

            <Terminal
              className="text-blue-500"
              size={20}
            />

            <h2
              className="text-lg
              font-semibold"
            >

              Output Console

            </h2>

          </div>

          {/* OUTPUT */}

          <div
            className="flex-1
            p-6 overflow-auto"
          >

            <div
              className="bg-black
              border border-gray-800
              rounded-[25px]
              h-full
              p-6"
            >

              <pre
                className="text-green-400
                whitespace-pre-wrap
                font-mono
                leading-7"
              >

                {output ||
                  error ||
                  "Run code to see output..."}

              </pre>

            </div>

          </div>

        </div>

      </div>

      {/* STATUS BAR */}

      <div
        className="h-[45px]
        border-t border-gray-800
        bg-[#0b0b0b]
        px-6
        flex items-center
        justify-between
        text-sm text-gray-400"
      >

        <p>

          {language.toUpperCase()}

        </p>

        <p>

          Docker Sandbox Active

        </p>

        <p>

          Ready

        </p>

      </div>

    </div>
  );
}

export default Playground;