import { useEffect, useRef } from "react";
import "./hero.css";
import Announcements from "../announcements/announcements";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      let scrollY = window.pageYOffset;
      let maxHeight = window.innerHeight;

      hero.style.opacity = 1 - scrollY / maxHeight;
      // hero.style.top = scrollY + "px";
      // hero.style.backgroundPositionY = -scrollY / 2 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="main-hero" >
      <div className="hero" ref={heroRef}>
        <video autoPlay muted loop className="background-video">
          <source src="/vid/2.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>
            IEEE SPS Kerala Chapter
          </h1>
          <p>Connecting Signal Minds Across the Globe</p>
          <button className="join-btn">
            <a
              href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMSP001&refProd=MEMSP001"
              target="_blank"
            >
              Join Now
            </a>
          </button>
        </div>
      </div>
      {/* <svg ... /> */}
      <div
        className="bottom-0"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
        }}
      >
        
      </div>
    </section>
  );
}
