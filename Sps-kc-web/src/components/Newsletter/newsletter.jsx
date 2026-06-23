import React, { useEffect, useState } from "react";
import { client } from "../../sanity/client";

const NEWSLETTERS_QUERY = `*[_type == "newsletter" && defined(file.asset)]|order(date desc){
  _id,
  title,
  file,
  date
}`;

function fileUrl(file) {
  if (file && file.asset && file.asset._ref) {
    // file.asset._ref is like "file-abc123-pdf"
    const match = file.asset._ref.match(/^file-([a-zA-Z0-9]+)-([a-z0-9]+)$/);
    if (match) {
      const id = match[1];
      const ext = match[2];
      return `https://cdn.sanity.io/files/${client.config().projectId}/${
        client.config().dataset
      }/${id}.${ext}`;
    }
  }
  return null;
}

export default function Newsletter() {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(NEWSLETTERS_QUERY);
        setNewsletters(data);
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
      <h2 className="text-2xl font-bold mb-4">Newsletters</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {newsletters.map((nl) => {
          const url = fileUrl(nl.file);
          return (
            <div key={nl._id} style={{ textAlign: "center" }}>
              <h3 className="text-lg font-semibold mb-2">{nl.title}</h3>
              {url ? (
                <iframe
                  src={url}
                  title={nl.title}
                  width="100%"
                  style={{
                    aspectRatio: "210/297", // A4 aspect ratio (width/height in mm)
                    minHeight: "420px", // reasonable minimum height
                    maxHeight: "842px", // reasonable max height for A4
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <p>No PDF available</p>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
