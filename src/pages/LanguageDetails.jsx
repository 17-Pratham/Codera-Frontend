import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

import { languagesData }
from "../data/languagesData";

import {
  Rocket,
  PlayCircle,
  ArrowRight,
  Briefcase,
  Code2,
} from "lucide-react";

function LanguageDetails() {

  const { language } = useParams();

  const data =
    languagesData[language];

  if (!data) {

    return (

      <div
        className="min-h-screen
        bg-black text-white
        flex items-center
        justify-center"
      >

        Language not found

      </div>

    );
  }

  return (

    <div
      className="bg-black
      text-white
      min-h-screen"
    >

      <Navbar />

      {/* HERO */}

      <section
        className="relative
        px-8 lg:px-24
        py-24
        overflow-hidden"
      >

        <div
          className="absolute
          w-[700px] h-[700px]
          bg-blue-600/10
          blur-[180px]
          rounded-full
          top-[-300px]
          right-[-200px]"
        />

        <div
          className="grid
          grid-cols-1
          lg:grid-cols-2
          gap-20
          items-center
          relative z-10"
        >

          {/* LEFT */}

          <div>

            <div
              className="inline-flex
              items-center gap-2
              bg-blue-600/10
              border border-blue-500/20
              rounded-full
              px-5 py-2
              text-blue-400"
            >

              <Rocket size={18} />

              Trending Language

            </div>

            <h1
              className="text-6xl
              lg:text-8xl
              font-black
              mt-8"
            >

              {data.title}

            </h1>

            <p
              className="text-gray-400
              text-xl
              leading-relaxed
              mt-8
              max-w-2xl"
            >

              {data.shortDescription}

            </p>

            {/* STATS */}

            <div
              className="flex
              flex-wrap gap-5
              mt-10"
            >

              <div
                className="bg-[#101010]
                border border-gray-800
                rounded-2xl
                px-6 py-4"
              >

                <p
                  className="text-gray-500
                  text-sm"
                >

                  Difficulty

                </p>

                <h3
                  className="text-xl
                  font-bold mt-2"
                >

                  {
                    data
                    ?.difficultyLevel
                    ?.level || "Beginner"
                  }

                </h3>

              </div>

              <div
                className="bg-[#101010]
                border border-gray-800
                rounded-2xl
                px-6 py-4"
              >

                <p
                  className="text-gray-500
                  text-sm"
                >

                  Salary

                </p>

                <h3
                  className="text-xl
                  font-bold mt-2"
                >

                  {
                    data
                    ?.averageSalary
                    ?.india
                    ?.fresher || "High"
                  }

                </h3>

              </div>

            </div>

            {/* BUTTONS */}

            <div
              className="flex
              flex-wrap gap-5
              mt-12"
            >

              <button
                className="bg-blue-600
                hover:bg-blue-700
                transition
                px-8 py-5
                rounded-2xl
                text-lg
                font-semibold
                flex items-center
                gap-3"
              >

                Start Learning

                <ArrowRight size={20} />

              </button>

              <button
                className="bg-[#101010]
                border border-gray-800
                hover:border-blue-500
                transition
                px-8 py-5
                rounded-2xl
                text-lg
                font-semibold"
              >

                Open Playground

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="bg-gradient-to-br
            from-[#111]
            to-[#050505]
            border border-gray-800
            rounded-[40px]
            p-8"
          >

            <div className="flex gap-3">

              <div
                className="w-3 h-3
                rounded-full
                bg-red-500"
              />

              <div
                className="w-3 h-3
                rounded-full
                bg-yellow-500"
              />

              <div
                className="w-3 h-3
                rounded-full
                bg-green-500"
              />

            </div>

            <div
              className="mt-10
              space-y-5
              font-mono
              text-lg"
            >

              <p className="text-blue-400">

                console.log("Hello Codera")

              </p>

              <p className="text-green-400">

                Hello Codera

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY LEARN */}

      <section
        className="px-8 lg:px-24
        py-20"
      >

        <div className="max-w-5xl">

          <h2
            className="text-5xl
            font-bold leading-tight"
          >

            Why developers love
            {" "}
            <span
              className="text-blue-500"
            >

              {data.title}

            </span>

          </h2>

          <p
            className="text-gray-400
            text-xl
            leading-relaxed
            mt-10"
          >

            {data.whyLearn}

          </p>

        </div>

      </section>

      {/* ROADMAP */}

      <section
        className="px-8 lg:px-24
        py-24"
      >

        <div
          className="flex items-center
          gap-4 mb-16"
        >

          <Code2
            className="text-blue-500"
            size={34}
          />

          <h2
            className="text-5xl
            font-bold"
          >

            Learning Roadmap

          </h2>

        </div>

        <div className="space-y-10">

          {data.roadmapSteps?.map(
            (step, index) => (

              <div
                key={index}
                className="flex gap-8"
              >

                <div
                  className="min-w-[70px]
                  h-[70px]
                  rounded-3xl
                  bg-blue-600
                  flex items-center
                  justify-center
                  text-2xl
                  font-bold"
                >

                  {step.step}

                </div>

                <div
                  className="flex-1
                  bg-[#101010]
                  border border-gray-800
                  rounded-[32px]
                  p-8"
                >

                  <h3
                    className="text-3xl
                    font-bold"
                  >

                    {step.title}

                  </h3>

                  <div
                    className="flex flex-wrap
                    gap-4 mt-8"
                  >

                    {step.topics?.map(
                      (topic, i) => (

                        <div
                          key={i}
                          className="bg-blue-600/10
                          border border-blue-500/20
                          text-blue-400
                          px-5 py-3
                          rounded-2xl"
                        >

                          {topic}

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </section>

      {/* VIDEOS */}

      <section
        className="px-8 lg:px-24
        py-20"
      >

        <div
          className="flex items-center
          gap-4 mb-16"
        >

          <PlayCircle
            className="text-blue-500"
            size={34}
          />

          <h2
            className="text-5xl
            font-bold"
          >

            Best YouTube Tutorials

          </h2>

        </div>

        <div
          className="grid
          grid-cols-1
          md:grid-cols-2
          gap-10"
        >

          {data.videos?.map(
            (video, index) => (

              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group
                bg-[#101010]
                border border-gray-800
                hover:border-blue-500
                transition
                rounded-[35px]
                overflow-hidden"
              >

                <div
                  className="overflow-hidden"
                >

                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full
                    h-[280px]
                    object-cover
                    group-hover:scale-105
                    transition duration-500"
                  />

                </div>

                <div className="p-8">

                  <h3
                    className="text-2xl
                    font-bold
                    leading-snug"
                  >

                    {video.title}

                  </h3>

                  <p
                    className="text-gray-400
                    mt-4"
                  >

                    {video.channel}

                  </p>

                </div>

              </a>

            )
          )}

        </div>

      </section>

      {/* CAREERS */}

      <section
        className="px-8 lg:px-24
        py-24"
      >

        <div
          className="flex items-center
          gap-4 mb-16"
        >

          <Briefcase
            className="text-blue-500"
            size={34}
          />

          <h2
            className="text-5xl
            font-bold"
          >

            Career Opportunities

          </h2>

        </div>

        <div
          className="grid
          grid-cols-1
          md:grid-cols-2
          gap-8"
        >

          {data.careerOpportunities?.map(
            (career, index) => (

              <div
                key={index}
                className="bg-[#101010]
                border border-gray-800
                rounded-[32px]
                p-8"
              >

                <h3
                  className="text-3xl
                  font-bold"
                >

                  {career.role}

                </h3>

                <p
                  className="text-gray-400
                  mt-6 leading-relaxed"
                >

                  {career.description}

                </p>

              </div>

            )
          )}

        </div>

      </section>

      {/* CTA */}

      <section
        className="px-8 lg:px-24
        py-24"
      >

        <div
          className="bg-gradient-to-r
          from-blue-600
          to-blue-500
          rounded-[40px]
          p-14
          text-center"
        >

          <h2
            className="text-5xl
            font-black"
          >

            Ready to master
            {" "}
            {data.title}?

          </h2>

          <p
            className="text-blue-100
            text-xl
            mt-8"
          >

            Start building real-world
            projects and improve your
            programming skills.

          </p>

          <button
            className="mt-10
            bg-white
            text-black
            px-8 py-5
            rounded-2xl
            text-lg
            font-bold"
          >

            Start Coding Now

          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default LanguageDetails;