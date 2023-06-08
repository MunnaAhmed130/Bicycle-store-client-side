import { useLocation } from "react-router-dom";
import { footerInfo, icons } from "../../../utils/constant";
import FooterList from "./FooterList";
import Social from "./Social";
import "./Footer.css";
import FooterLists from "./FooterLists";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  // lg:px-20 md:px-10 px-5 py-5

  return (
    <footer className="bg-black flex flex-col md:px-10 px-5 py-2 border">
      <div className="max-w-7xl w-full mx-auto flex flex-col ">
        <section className="flex lg:flex-row flex-col gap-5">
          <div className="flex flex-col gap-1 w-full ">
            <h5 className="footer-heading">Bicycle Zone</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe eius tempore autem.
            </p>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h5 className="footer-heading">Social Media</h5>
            <ul className="flex flex-row gap-3  ">
              {icons.map((Icon) => (
                <Social key={Icon} Icon={Icon} />
              ))}
            </ul>
          </div>
        </section>

        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 py-2">
          {footerInfo.map((info) => (
            <FooterLists key={info.title} list={info} />
          ))}
        </section>
      </div>
      <div className="">
        <p className="text-center py-2 text-[15px]">
          Copyright &copy; 2021. All Rights Reserved
        </p>
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
