import React, { useEffect, useState } from "react";
import {
  Award as AwardIcon,
  Calendar,
  UserRound,
  Sparkles,
} from "lucide-react";
import {client} from "../../sanity/client"; // Adjust path as needed
import imageUrlBuilder from "@sanity/image-url";

// Icon mapping for lucide-react
const iconMap = {
  Award: <AwardIcon className="text-blue-600" size={28} />,
  Sparkles: <Sparkles className="text-yellow-500" size={28} />,
  UserRound: <UserRound className="text-green-600" size={28} />,
};

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}

function Awards() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "award"] | order(year desc) {
      _id,
      name,
      recipient,
      year,
      description,
      icon,
      image
    }`
      )
      .then((data) => {
        setAwards(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading awards...</div>;
  }

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center mb-10" style={{ marginTop: "150px" }}>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          IEEE SPS Kerala Chapter Awards
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Highlighting the distinguished contributions of
          our IEEE student chapter and its members.
        </p>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award) => (
          <AwardCard key={award._id} award={award} />
        ))}
      </div>
    </section>
  );
}

// AwardCard Component to display individual award details
function AwardCard({ award }) {
  // Fallback to Award icon if not mapped
  const IconComponent = iconMap[award.icon] || (
    <AwardIcon className="text-blue-600" size={28} />
  );
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start border border-blue-100">
      {award.image && (
        <img
          src={urlFor(award.image)}
          alt={award.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x200/CCCCCC/000000?text=Image+Error";
          }}
        />
      )}
      <div className="flex items-center mb-4">
        {IconComponent}
        <h3 className="text-xl font-semibold text-gray-900 ml-3">
          {award.name}
        </h3>
      </div>
      <p className="text-gray-700 mb-2 flex items-center">
        <UserRound className="w-4 h-4 mr-2 text-gray-500" />
        <span className="font-medium">{award.recipient}</span>
      </p>
      <p className="text-gray-600 mb-4 flex items-center">
        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
        <span className="text-sm">{award.year}</span>
      </p>
      {/* <p className="text-gray-600 text-sm leading-relaxed flex-grow">{award.description}</p> */}
    </div>
  );
}

export default Awards;
