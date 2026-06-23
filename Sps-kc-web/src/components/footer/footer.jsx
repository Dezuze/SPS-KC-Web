import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG } from "../../config/siteConfig";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contacts">
          <div className="col">
            <img src={SITE_CONFIG.LOGO_PATH} alt="" />
            <div className="icons flex gap-4">
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} className="text-2xl" />
              </a>
            </div>
          </div>
          <ul className="main-links">
            <li style={{ fontWeight: 400, marginBottom: 20 }}>Company</li>
            <li>
              <a href="/">Home</a>{" "}
            </li>
            <li>
              <a href="/#about">About</a>{" "}
            </li>
            <li>
              <Link to="/events">Events</Link>{" "}
            </li>
          </ul>
          <ul className="other-links">
            <li style={{ fontWeight: 400, marginBottom: 20 }}>Other Links</li>
            <li>
              <a href="https://www.ieee.org/">IEEE</a>
            </li>
            <li>
              <a href="https://signalprocessingsociety.org/">
                Signal Processing Society
              </a>
            </li>
            <li>
              <a href="https://ieeekerala.org/">IEEE Kerala Section</a>
            </li>
          </ul>
          <ul className="contact">
            <li style={{ fontWeight: 400, marginBottom: 20 }}>Contact</li>
            <li>{SITE_CONFIG.CONTACT.EMAIL}</li>
            <li>{SITE_CONFIG.CONTACT.PHONE}</li>
            <li>
              <p>
                {SITE_CONFIG.CONTACT.ADDRESS.STREET.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                <br />
                {SITE_CONFIG.CONTACT.ADDRESS.CITY}
                <br />
                {SITE_CONFIG.CONTACT.ADDRESS.STATE}{" "}
                {SITE_CONFIG.CONTACT.ADDRESS.POSTAL_CODE}
              </p>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="main-footer">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.SITE_NAME}. All
            rights reserved.
          </p>
          <p>
            Designed and Developed by{" "}
            <a href="/team">{SITE_CONFIG.SITE_NAME} Web Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
