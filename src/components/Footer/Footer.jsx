import {
  Globe,
  Code2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {

  return (

    <footer
      className="bg-black text-white
      border-t border-gray-800
      px-10 lg:px-24
      py-16"
    >

      <div
        className="grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-12"
      >

        {/* BRAND */}

        <div>

          <div
            className="flex items-center
            gap-3"
          >

            <Code2
              className="text-blue-500"
              size={32}
            />

            <h1
              className="text-3xl
              font-bold"
            >

              Codera

            </h1>

          </div>

          <p
            className="text-gray-400
            mt-6 leading-relaxed"
          >

            Interactive coding playground
            built for learning, experimenting,
            and mastering programming.

          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h2
            className="text-xl
            font-semibold"
          >

            Quick Links

          </h2>

          <div
            className="flex flex-col
            gap-4 mt-6
            text-gray-400"
          >

            <a
              href="#"
              className="hover:text-blue-500
              transition"
            >

              Languages

            </a>

            <a
              href="#videos"
              className="hover:text-blue-500
              transition"
            >

              Videos

            </a>

            <a
              href="#"
              className="hover:text-blue-500
              transition"
            >

              Playground

            </a>

            <a
              href="#"
              className="hover:text-blue-500
              transition"
            >

              About

            </a>

          </div>

        </div>

        {/* TECHNOLOGIES */}

        <div>

          <h2
            className="text-xl
            font-semibold"
          >

            Technologies

          </h2>

          <div
            className="flex flex-col
            gap-4 mt-6
            text-gray-400"
          >

            <p>React.js</p>

            <p>Django REST</p>

            <p>Docker</p>

            <p>Tailwind CSS</p>

          </div>

        </div>

        {/* SOCIAL LINKS */}

        <div>

          <h2
            className="text-xl
            font-semibold"
          >

            Connect

          </h2>

          <div
            className="flex gap-5 mt-6"
          >

            {/* GITHUB */}

            <a

              href="#"

              className="bg-[#111]
              border border-gray-800
              p-4 rounded-2xl
              hover:border-blue-500
              hover:text-blue-500
              transition"

            >

              <FaGithub size={22} />

            </a>

            {/* LINKEDIN */}

            <a

              href="#"

              className="bg-[#111]
              border border-gray-800
              p-4 rounded-2xl
              hover:border-blue-500
              hover:text-blue-500
              transition"

            >

              <FaLinkedin size={22} />

            </a>

            {/* WEBSITE */}

            <a

              href="#"

              className="bg-[#111]
              border border-gray-800
              p-4 rounded-2xl
              hover:border-blue-500
              hover:text-blue-500
              transition"

            >

              <Globe size={22} />

            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        className="border-t border-gray-800
        mt-16 pt-8
        flex flex-col lg:flex-row
        items-center justify-between
        gap-4"
      >

        <p className="text-gray-500">

          © 2026 Codera.
          Built with React, Django & Docker.

        </p>

        <p className="text-gray-500">

          Designed & Developed by Ganesh Bhalekar

        </p>

      </div>

    </footer>
  );
}

export default Footer;