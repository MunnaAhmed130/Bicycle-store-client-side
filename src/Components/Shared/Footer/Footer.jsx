import { useLocation } from "react-router-dom";
import { footerInfo, icons } from "../../../utils/constant";
import Social from "./Social";
import { SiMinutemailer } from "react-icons/si";
import "./Footer.css";
import FooterLists from "./FooterLists";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  // lg:px-20 md:px-10 px-5 py-5

  return (
    <footer className="bg-black flex flex-col md:px-10 px-5 py-3">
      <div className="max-w-7xl w-full mx-auto flex flex-col ">
        <section className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 w-full ">
            <div>
              <h5 className="text-2xl font-extrabold uppercase text-white">
                Bicycle Zone
              </h5>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                saepe eius tempore autem.
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h5 className="text-xl font-extrabold uppercase text-white">
                Social Media
              </h5>
              <ul className="flex flex-row gap-3  ">
                {icons.map((Icon) => (
                  <Social key={Icon} Icon={Icon} />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h6 className="text-xl font-extrabold uppercase text-white ">
              Newsletter
            </h6>
            <div className="border border-solid border-red-500 w-72 h-14 flex">
              <input
                type="mail"
                className="w-64 focus-visible:outline-none  px-1 bg-white/10"
              />
              <button className="bg-slate-400 h-full w-16">
                <SiMinutemailer className="text-2xl " />
              </button>
            </div>
            <span className="flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                name="checkbox"
                className="bg-white/25 appearance-none border border-solid rounded-[1px] h-4 w-4 cursor-pointer border-red-500 before:content-[''] before:w-3 before:h-3 before:transition-all duration-150 "
              />
              <span>I agree to the Privacy Policy</span>
            </span>
          </div>
        </section>

        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10  py-2">
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
