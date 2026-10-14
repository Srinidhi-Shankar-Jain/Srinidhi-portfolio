
import PhotoGallery from "./PhotoGallery";

const awards = [
  {
    title: "Deutschlandstipendium 2024",
    organization: "Hochschule Schmalkalden",
    sponsor: "Viba Sweets",
    date: "Oct 2024",
    description:
      "Awarded the prestigious Deutschlandstipendium scholarship in recognition of outstanding academic performance and active engagement in sports, volunteering, and university projects.",
    photos: [
      {
        name: "Deutschlandstipendium",
        caption: "Deutschlandstipendium 2024",
      },
    ],
  },

  {
    title: "IEEE Bangalore Section – Best Student Volunteer",
    organization: "IEEE Bangalore Section",
    date: "Jan 2023",
    description:
      "Recognized by the IEEE Bangalore Section for outstanding dedication, commitment, and service as a student volunteer.",
    photos: [
      {
        name: "IEEE Award",
        caption: "IEEE Best Student Volunteer Award",
      },
    ],
  },

  {
    title: "Zenken Corporation – Best Student Volunteer",
    organization: "Zenken Corporation, Japan",
    date: "Jul 2022",
    description:
      "Received the Best Student Volunteer award from Zenken Corporation, Japan, in recognition of dedication and active involvement in volunteering activities.",
    photos: [
      {
        name: "Zenken Award",
        caption: "Zenken Best Student Volunteer Award",
      },
    ],
  },
];

function Awards() {
  return (
    <section
      id="awards"
      className="w-full flex flex-col items-center bg-mass-icon bg-no-repeat bg-cover px-6 py-12 sm:px-10 lg:px-14"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center max-lg:text-2xl max-sm:text-xl">
        Awards & Achievements
      </h2>

      {/* Awards Container */}
      <div className="w-full max-w-4xl mt-10">
        {awards.map((award) => (
          <article
            key={award.title}
            className="mb-10 pb-8 border-b border-gray-300 last:border-none"
          >
            {/* Award Title and Date */}
            <div className="flex flex-wrap justify-between items-start gap-3">
              <h3 className="text-xl font-bold max-lg:text-lg max-sm:text-base flex-1 min-w-0">
                {award.title}
              </h3>

              <span className="text-sm text-gray-600 font-medium whitespace-nowrap ml-auto text-right">
                {award.date}
              </span>
            </div>

            {/* Awarding Organization */}
            <p className="text-blue-700 font-semibold mt-2 max-sm:text-sm">
              {award.organization}
            </p>

            {/* Scholarship Sponsor */}
            {award.sponsor && (
              <p className="text-sm text-gray-600 mt-1">
                Sponsored by: {award.sponsor}
              </p>
            )}

            {/* Description and Photograph */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 mt-5">

              {/* Award Description */}
              <div className="flex-1 min-w-0">
                <p className="text-lg text-gray-950 leading-relaxed max-lg:text-sm max-sm:text-xs">
                  {award.description}
                </p>
              </div>

              {/* Award Photograph */}
              {award.photos.length > 0 && (
                <div className="w-full max-w-sm lg:w-72 lg:shrink-0">
                  <PhotoGallery
                    photos={award.photos}
                    contain={true}
                    className="mt-0"
                  />
                </div>
              )}

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Awards;
