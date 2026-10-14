
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

// Images are stored in public/images/Pictures/
const extensions = [".jpeg", ".jpg", ".png", ".webp"];

function PhotoCard({ photo, contain, showCaptions }) {
  const [extensionIndex, setExtensionIndex] = useState(0);
  const [missing, setMissing] = useState(false);

  const fileName =
    `${photo.name}${extensions[extensionIndex]}`;

  const imageUrl =
    `/images/Pictures/${encodeURIComponent(fileName)}`;

  const tryNextExtension = () => {
    if (extensionIndex + 1 < extensions.length) {
      setExtensionIndex((previous) => previous + 1);
    } else {
      setMissing(true);
    }
  };

  if (missing) return null;

  return (
    <a
      href={imageUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open photograph: ${photo.caption || photo.name}`}
      className="block min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Photograph */}
      <div className="aspect-[4/3] w-full bg-gray-50">
        <img
          src={imageUrl}
          alt={photo.caption || photo.name}
          loading="lazy"
          onError={tryNextExtension}
          className={`h-full w-full ${
            contain
              ? "object-contain p-1"
              : "object-cover"
          }`}
        />
      </div>

      {/* Optional Photograph Caption */}
      {showCaptions && (
        <p className="px-3 py-2 text-center text-sm leading-snug text-gray-600">
          {photo.caption || photo.name}
        </p>
      )}
    </a>
  );
}

// YouTube Video Card
function VideoCard({ video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch on YouTube: ${video.title}`}
      className="block min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Video Preview */}
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-gray-900 px-3 text-white">

        <FaYoutube
          className="text-5xl text-red-500"
          aria-hidden="true"
        />

        <span className="text-center text-sm font-medium">
          Watch on YouTube
        </span>
      </div>

      {/* Video Title */}
      <p className="px-3 py-2 text-center text-sm leading-snug text-gray-700">
        {video.title}
      </p>
    </a>
  );
}

// Reusable Gallery Component
export default function PhotoGallery({
  photos = [],
  videos = [],
  contain = false,
  showCaptions = true,
  className = "",
}) {
  // Only display videos that have valid HTTPS links
  const linkedVideos = videos.filter(
    (video) =>
      typeof video.url === "string" &&
      /^https:\/\//i.test(video.url)
  );

  // Display videos next to the first photograph
  const items = [
    ...(photos.length
      ? [{ type: "photo", value: photos[0] }]
      : []),

    ...linkedVideos.map((video) => ({
      type: "video",
      value: video,
    })),

    ...photos.slice(1).map((photo) => ({
      type: "photo",
      value: photo,
    })),
  ];

  if (!items.length) return null;

  // Responsive gallery columns
  const columns =
    items.length === 1
      ? "grid-cols-1 max-w-md"
      : items.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div
      className={`mt-6 grid w-full gap-4 ${columns} ${className}`}
    >
      {items.map((item) =>
        item.type === "photo" ? (
          <PhotoCard
            key={`photo-${item.value.name}`}
            photo={item.value}
            contain={contain}
            showCaptions={showCaptions}
          />
        ) : (
          <VideoCard
            key={`video-${item.value.title}`}
            video={item.value}
          />
        )
      )}
    </div>
  );
}
