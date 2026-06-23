import React, { useEffect, useRef, useState } from "react";
import "./announcements.css";

import { client } from "../../sanity/client";

const ANNOUNCEMENTS_QUERY = `*[_type == "announcement" && active == true && start <= now() && end >= now()]|order(start desc){
  _id,
  title,
  message,
  link
}`;

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const data = await client.fetch(ANNOUNCEMENTS_QUERY);

        // Add static announcement
        const staticAnnouncement = {
          _id: "celebration-10-years",
          title: "Celebrating 10 Years 🎉",
          message: "Thank you for being part of our journey!",
          link: null,
        };

        setAnnouncements([staticAnnouncement, ...data]); // Show it on top
      } catch (err) {
        setAnnouncements([]);
      }
    }
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (announcements.length > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % announcements.length);
      }, 2500);
      return () => clearInterval(intervalRef.current);
    }
  }, [announcements]);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <section className="announcements-section">
      <h2 className="section-title">Announcements</h2>
      <div className="announcements-vertical">
        <div
          className="vertical-list"
          style={{
            transform: `translateY(-${index * 2.5}rem)`,
            transition: "transform 0.5s",
          }}
        >
          {announcements.map((a) =>
            a.link ? (
              <a
                key={a._id}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-item announcement-link"
              >
                <strong>{a.title}</strong>: {a.message}
              </a>
            ) : (
              <div key={a._id} className="announcement-item">
                <strong>{a.title}</strong>: {a.message}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
