import React, { useEffect, useState, useRef } from "react";
import "./event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { client } from "../../sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="custom-prev-arrow"
    onClick={onClick}
    aria-label="Previous event"
  >
    ‹
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="custom-next-arrow"
    onClick={onClick}
    aria-label="Next event"
  >
    ›
  </button>
);

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const EVENTS_QUERY = `*[_type == "event" && defined(image.asset)]|order(date desc)[0...8]{
  _id,
  image,
  date
}`;

export default function Event() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageRefs = useRef({});

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

  // Function to check if image needs shrinking
  const checkImageAspectRatio = (imgElement) => {
    if (imgElement && imgElement.complete) {
      const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
      console.log("Aspect ratio:", aspectRatio); // Debug log

      // If image is very wide or very tall, add shrink class
      if (aspectRatio <= 0.8 || aspectRatio >= 1.25) {
        imgElement.classList.add("shrink");
        console.log("Added shrink class"); // Debug log
      } else {
        imgElement.classList.remove("shrink");
      }
    }
  };

  const handleImageLoad = (e, eventId) => {
    const img = e.target;
    imageRefs.current[eventId] = img;

    // Small delay to ensure image is fully loaded
    setTimeout(() => {
      checkImageAspectRatio(img);
    }, 100);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <section className="main-event">
      <h1 className="event-title">Events</h1>
      <div className="event">
        <Slider {...settings}>
          {events.map((event, index) => {
            const imageUrl =
              event.image && event.image.asset
                ? urlFor(event.image).url()
                : null;
            return (
              <div key={event._id || index} className="card">
                <div className="card-body">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={`Event ${index + 1}`}
                      onLoad={(e) => handleImageLoad(e, event._id)}
                      onError={(e) => {
                        console.log("Image load error");
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
