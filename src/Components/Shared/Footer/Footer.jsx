import { useState } from "react";
import { footerInfo, icons } from "../../../utils/constant";
import { SiMinutemailer } from "react-icons/si";
import FooterLists from "./FooterLists";
import Social from "./Social";
import "./Footer.css";

const Footer = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  // console.log(isAgreed);

  return (
    <footer className="bg-black flex flex-col md:px-10 px-5 py-3 ">
      <div className="max-w-7xl w-full mx-auto flex flex-col py-10">
        <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col md:gap-5 gap-10">
            <div className="">
              <h5 className="text-2xl font-extrabold uppercase text-white/[.98]  mb-2">
                Bicycle Zone
              </h5>
              <p className="max-w-lg text-[#c5c5c5]">
                We are more than just a shop. We are a hub for cyclists of all
                levels, from the casual rider to the seasoned pro.
              </p>
            </div>
            <div className="mb-5">
              <h5 className="text-xl font-extrabold uppercase text-white/[.98] mb-2">
                Social Media
              </h5>
              <ul className="flex flex-row gap-3  ">
                {icons.map((Icon) => (
                  <Social key={Icon} Icon={Icon} />
                ))}
              </ul>
            </div>
          </div>
          <div className=" ">
            <h6
              className="text-xl mb-4 font-extrabold uppercase text-white/[.98]
            "
            >
              Newsletter
            </h6>
            <div className="border border-solid border-red-700 focus-within:border-red-500 w-72 h-14 transition-all duration-150 flex mb-2 rounded-sm">
              <input
                type="email"
                className="w-64 focus-visible:outline-none  px-1 bg-white/10 "
                required
              />
              <button
                type="submit"
                disabled={!isAgreed}
                onClick={() => console.log("clicked")}
                className="bg-slate-400/30 hover:bg-slate-400/40 h-full w-16  text-white/70 hover:text-white transition-all duration-100 "
              >
                <SiMinutemailer className="text-2xl transition-colors duration-150" />
              </button>
            </div>
            <span className="flex flex-row gap-2 items-center ">
              <input
                type="checkbox"
                name="checkbox"
                onClick={() => setIsAgreed(!isAgreed)}
                className=" border border-solid rounded-[1px] h-4 w-4 cursor-pointer border-red-500 before:w-2.5 before:h-2.5 mt-1 before:transition-all duration-150 "
              />
              <p className="inline-block text-gray-400 text-sm">
                I agree to the &nbsp;
                <span className="text-gray-200">Privacy Policy</span>
              </p>
            </span>
          </div>
        </section>

        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-y-7 py-2">
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
