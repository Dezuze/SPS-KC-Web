import React, { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const EVENTS_QUERY = `*[_type == "event" && defined(image.asset)]|order(date desc){
  _id,
  image,
  date
}`;

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(EVENTS_QUERY);
        setEvents(data);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <main className="container mx-auto p-8">
    <h1 className="text-4xl p-10 sm:text-5xl text-center font-extrabold text-blue-800 mb-4 tracking-tight">
      All Posters
        </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {events.map((event) => {
          const imageUrl =
            event.image && event.image.asset ? urlFor(event.image).url() : null;
          return (
            <div
              key={event._id}
              style={{
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Event"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
