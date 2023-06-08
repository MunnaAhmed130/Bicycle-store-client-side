import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import Social from "./Social";
import FooterList from "./FooterList";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  // lg:px-20 md:px-10 px-5 py-5
  const icons = [FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter];
  const pages = [
    { id: "/", title: "Home" },
    { id: "/", title: "About" },
    { id: "/", title: "Blog" },
    { id: "/", title: "Contact" },
  ];

  const service = [
    { id: "/", title: "Bikes For Rent" },
    { id: "/", title: "Bikes & Parts" },
    { id: "/", title: "Blog" },
    { id: "/", title: "Contact" },
  ];

  const information = [
    { id: "/", title: "Privacy Policy" },
    { id: "/", title: "Terms & Conditions" },
    { id: "/", title: "Disclaimer" },
    // { id: "/", title: "Contact" },
  ];

  return (
    <footer className="bg-black flex flex-col md:px-10 px-5 py-2">
      <section className="max-w-7xl w-full mx-auto flex flex-col ">
        <section className="flex lg:flex-row flex-col gap-5">
          <div className="flex flex-col w-full  py-5">
            <h5 className="footer-heading">Bicycle Zone</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe eius tempore autem.
            </p>
          </div>
          <div className=" py-5 w-full">
            <h5 className="footer-heading">Social Media</h5>
            <ul className="flex flex-row gap-3  ">
              {icons.map((Icon) => (
                <Social key={Icon} Icon={Icon} />
              ))}
            </ul>
          </div>
        </section>

        <section className="flex sm:flex-row flex-col  justify-between  ">
          <div className="flex flex-col  w-full">
            <h5 className="footer-heading">Quick Links</h5>
            <div className="flex flex-col ">
              {pages.map((page) => (
                <FooterList list={page} key={page.id} />
              ))}
            </div>
          </div>

          <div className="flex flex-col  w-full">
            <h5 className="footer-heading">Our Service</h5>
            <div className="flex flex-col ">
              {service.map((service) => (
                <FooterList list={service} key={service.id} />
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-full">
            <h5 className="footer-heading">Information</h5>
            {information.map((info) => (
              <FooterList key={service.title} list={info} />
            ))}
          </div>
        </section>
      </section>
      <div className="">
        <p className=" text-center py-2">All Rights Reserved by Munna Ahmed</p>
      </div>
    </footer>
  );
};

export default Footer;

{
  /*
   <div className="">
<h5 className="footer-heading">pages</h5>

<Link to="/">Home</Link>
<Link to="/">About</Link>
<Link to="/login">Login</Link>
</div>
<div className="">
<h5 className="footer-heading">Service</h5>
<a href="#">Rental</a>
<a href="#">Repair</a>
<a href="#">shop</a>
</div>
<div className=" ">
<h5 className="footer-heading">Information</h5>
<a href="#">Product Support</a>
<a href="#">Privacy Policy</a>
<a href="#">Terms &amp; Conditions</a>
<a href="#">Disclaimer</a>
/* <a href="#">Career</a> 
/* <a href="#">Community</a> 
/* <a href="#">Report</a> 
</div> 
*/
}
