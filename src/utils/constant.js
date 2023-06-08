import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "explore",
    title: "Explore",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  },
];

const bannerImg = [
  {
    src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
    alt: "a cycle indoor",
    blurHash:
      "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    text: {
      title: "Bicycles for Adventures",
      description:
        "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
    },
  },
  {
    src: "https://i.ibb.co/hK5zTvv/background.png",
    alt: "outdoor cycling",
    blurHash:
      "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    text: {
      title: "Bicycles for Adventures",
      description:
        "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
    },
  },
  {
    src: "https://i.ibb.co/PgvhsyP/h1-bannernew.jpg",
    blurHash:
      "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    text: {
      title: "Bicycles for Adventures",
      description:
        "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
    },
  },
];

const icons = [FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter];

const footerInfo = [
  {
    title: "Quick Links",
    links: [
      { id: "/", title: "Home" },
      { id: "/", title: "About" },
      { id: "/", title: "Blog" },
      { id: "/", title: "Contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { id: "/", title: "Bikes For Rent" },
      { id: "/", title: "Bikes & Parts" },
      { id: "/", title: "Bikes Repair" },
      { id: "/explore", title: "Clothing" },
    ],
  },
  {
    title: "Information",
    links: [
      { id: "/", title: "Privacy Policy" },
      { id: "/", title: "Terms & Conditions" },
      { id: "/", title: "Support" },
      { id: "/", title: "Disclaimer" },
    ],
  },
  {
    title: "Information",
    links: [
      { id: "/", title: "Privacy Policy" },
      { id: "/", title: "Terms & Conditions" },
      { id: "/", title: "Support" },
      { id: "/", title: "Disclaimer" },
    ],
  },
];

export { navLinks, bannerImg, icons, footerInfo };
