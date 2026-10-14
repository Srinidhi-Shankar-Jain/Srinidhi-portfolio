
import PhotoGallery from "./PhotoGallery";

const education = [
  {
    degree: "Mechatronics & Robotics (M.Eng.)",
    university: "Hochschule Schmalkalden",
    location: "Schmalkalden, Germany",
    duration: "Oct 2023 - Oct 2026",

    specialization: "Industrial Automation Engineering",

    thesis:
      "Development and Implementation of a Robotic Workcell with PLC, Digital Twin and Machine Vision for Automated Material Handling",

    // Hochschule Schmalkalden photographs
    photos: [
      {
        name: "Hochschule Schmalkalden",
      },
      {
        name: "Hochschule Schmalkalden Class",
      },
    ],

    // No captions beneath these photographs
    showPhotoCaptions: false,
  },

  {
    degree: "Mechanical Engineering (B.Eng.)",
    university: "Visvesvaraya Technological University (VTU)",
    location: "India",
    duration: "Jul 2018 - Jul 2022",

    specialization: "Mechatronics",

    thesis:
      "Terrestrial Robots for Extreme Environmental Conditions",

    // Bachelor's graduation photograph
    photos: [
      {
        name: "NHCE Graduation",
        caption: "Graduation Ceremony",
      },
    ],

    showPhotoCaptions: true,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="flex w-full flex-col items-center bg-mass-icon bg-no-repeat bg-cover px-6 py-12 sm:px-10 lg:px-14"
    >
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold max-lg:text-2xl max-sm:text-xl">
        Education
      </h2>

      {/* Education Entries */}
      <div className="mt-10 w-full max-w-4xl">
        {education.map((item) => (
          <article
            key={item.degree}
            className="mb-10 border-b border-gray-300 pb-8 last:border-none"
          >
            {/* Degree and Dates */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 text-xl font-bold max-lg:text-lg max-sm:text-base">
                {item.degree}
              </h3>

              <span className="ml-auto whitespace-nowrap text-right text-sm font-medium text-gray-600">
                {item.duration}
              </span>
            </div>

            {/* University */}
            <p className="mt-2 font-semibold text-blue-700 max-sm:text-sm">
              {item.university}
            </p>

            {/* Location */}
            <p className="mt-1 text-sm text-gray-600">
              {item.location}
            </p>

            {/* Education Details and Photographs */}
            <div className="mt-5 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">

              {/* Education Details */}
              <div className="space-y-3 text-lg leading-relaxed text-gray-950 max-lg:text-sm max-sm:text-xs">

                <p>
                  <strong>Specialization:</strong>{" "}
                  {item.specialization}
                </p>

                <p>
                  <strong>Thesis:</strong>{" "}
                  {item.thesis}
                </p>

              </div>

              {/* University Photographs */}
              <PhotoGallery
                photos={item.photos}
                contain={true}
                showCaptions={item.showPhotoCaptions}
                className="!mt-0"
              />

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
