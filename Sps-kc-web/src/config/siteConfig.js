// Site configuration constants
export const SITE_CONFIG = {
  // Domain and URLs
  DOMAIN: "https://ieeespskc.in",

  // Site Information
  SITE_NAME: "IEEE SPS Kerala Chapter",
  SITE_TITLE: "IEEE SPS Kerala Chapter - Signal Processing Society",

  // Default SEO
  DEFAULT_DESCRIPTION:
    "IEEE Signal Processing Society Kerala Chapter promotes excellence in signal processing education, research, and technology in Kerala. Join our community of professionals, students, and researchers.",
  DEFAULT_KEYWORDS:
    "IEEE, Signal Processing, SPS, Kerala, Technology, Engineering, Research, Education, Events, Professional Development",

  // Images
  DEFAULT_OG_IMAGE: "/img/logo/sps kc png.png",
  LOGO_PATH: "/img/logo/sps kc png.png",

  // Contact Information
  CONTACT: {
    EMAIL: "ieeespskerala@gmail.com",
    PHONE: "+91-80756-13378",
    ADDRESS: {
      STREET: [
              "HarmonIEEE, 1st Floor,",
               "Cherian's Square",
              "Ambujavilasam Rd, PB77, GPO"
      ],    
      CITY: "Thiruvananthapuram",
      STATE: "Kerala",
      POSTAL_CODE: "695001",
      COUNTRY: "IN",
    },
  },

  // Social Media
  SOCIAL_LINKS: {
    FACEBOOK: "https://www.facebook.com/ieeespskerala",
    INSTAGRAM: "https://www.instagram.com/ieeespskerala",
    LINKEDIN: "https://www.linkedin.com/company/ieee-sps-kerala-chapter",
    WHATSAPP: "https://whatsapp.com/channel/0029VaUBEMQKQuJFMXYUhJ0U",
    DISCORD: "https://discord.gg/QqSerMFe",
  },

  // Theme
  THEME_COLOR: "#1a237e",
};

// Helper function to generate full URLs
export const getFullUrl = (path = "") => {
  return `${SITE_CONFIG.DOMAIN}${path}`;
};

// Helper function to get full image URL
export const getFullImageUrl = (imagePath) => {
  return `${SITE_CONFIG.DOMAIN}${imagePath}`;
};
