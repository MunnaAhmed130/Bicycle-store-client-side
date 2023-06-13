import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

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

const allTags = ["Kids", "Mens", "Womens", "Trail", "Mountain", "Hybrid"];

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

const icons = [
  { icon: FaFacebookF, link: "https://www.facebook.com/" },
  { icon: AiFillInstagram, link: "https://www.instagram.com/" },
  { icon: IoLogoWhatsapp, link: "https://www.whatsapp.com/" },
  { icon: FaTwitter, link: "https://twitter.com/" },
];

const contact = [
  {
    title: "Contact",
    list: [{ logo: BsTelephone, title: "Phone", info: "(018) 50950555" }],
  },
];

const footerInfo = [
  {
    title: "Quick Links",
    list: [
      { id: "/", title: "Home" },
      { id: "/", title: "About" },
      { id: "/", title: "Blog" },
      { id: "/", title: "Contact" },
    ],
  },
  {
    title: "Our Services",
    list: [
      { id: "/", title: "Bikes For Rent" },
      { id: "/", title: "Bikes & Parts" },
      { id: "/", title: "Bikes Repair" },
      { id: "/explore", title: "Clothing" },
    ],
  },
  {
    title: "Information",
    list: [
      { id: "/", title: "Privacy Policy" },
      { id: "/", title: "Terms & Conditions" },
      { id: "/", title: "Support" },
      { id: "/", title: "Disclaimer" },
    ],
  },
  {
    title: "Contact",
    list: [
      { logo: BsTelephone, title: "Our Helpline", info: "(018) 50950555" },
      { logo: TfiEmail, title: "Email Address", info: "cyclezone@gmail.com" },
      {
        logo: IoLocationOutline,
        title: "Visit Office",
        info: "4051 Pine Street, Portland",
      },
    ],
  },
];

export { navLinks, bannerImg, icons, footerInfo, contact, allTags };
