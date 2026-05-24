import { Play } from "lucide-react";

function Videos() {

  const videos = [

    {
      title: "Python For Beginners",
      image:
        "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg",
      duration: "4 Hours",
      link:
        "https://www.youtube.com/watch?v=rfscVS0vtbw",
    },

    {
      title: "JavaScript Full Course",
      image:
        "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
      duration: "3 Hours",
      link:
        "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    },

    {
      title: "C++ Tutorial",
      image:
        "https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg",
      duration: "1 Hour",
      link:
        "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
    },

  ];

  return (

    <section
      id="videos"
      className="bg-black text-white
      px-10 lg:px-24 pb-24"
    >

      {/* TITLE */}

      <div className="text-center">

        <h1 className="text-5xl font-bold">

          Learn From Videos

        </h1>

        <p
          className="text-gray-400
          mt-5 text-lg"
        >

          Beginner-friendly tutorials to
          kickstart your coding journey.

        </p>

      </div>

      {/* VIDEO GRID */}

      <div
        className="grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-10 mt-20"
      >

        {videos.map((video, index) => (

          <a

            key={index}

            href={video.link}

            target="_blank"

            rel="noreferrer"

            className="group
            bg-[#111]
            border border-gray-800
            rounded-3xl
            overflow-hidden
            hover:border-blue-500
            transition duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"

          >

            {/* IMAGE */}

            <div className="relative">

              <img
                src={video.image}
                alt={video.title}
                className="w-full h-[220px]
                object-cover"
              />

              {/* PLAY BUTTON */}

              <div
                className="absolute inset-0
                bg-black/40
                flex items-center justify-center"
              >

                <div
                  className="bg-blue-600
                  p-5 rounded-full
                  group-hover:scale-110
                  transition"
                >

                  <Play
                    fill="white"
                    size={28}
                  />

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <div
                className="flex items-center
                justify-between"
              >

                <h2
                  className="text-2xl
                  font-semibold"
                >

                  {video.title}

                </h2>

                <span
                  className="text-sm
                  text-gray-400"
                >

                  {video.duration}

                </span>

              </div>

              <p
                className="inline-block
                mt-6 text-blue-500
                group-hover:text-blue-400
                transition"
              >

                Watch Tutorial →

              </p>

            </div>

          </a>

        ))}

      </div>

      {/* VIEW ALL BUTTON */}

      <div className="flex justify-center mt-16">

        <a

          href="#videos"

          className="border border-gray-700
          hover:border-blue-500
          hover:bg-blue-600
          transition
          px-8 py-4
          rounded-2xl
          text-lg"

        >

          View All Videos

        </a>

      </div>

    </section>
  );
}

export default Videos;