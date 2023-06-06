import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <footer className="bg-black lg:px-20 md:px-10 px-5 py-5 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex sm:flex-row flex-col">
          <div className="basis-1/2 mr-3">
            <h5 className="footer-heading">Bicycle Zone</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe eius tempore autem.
            </p>
          </div>
          <div className="flex flex-col basis-full">
            <p className="">Lorem ipsum dolor sit amet</p>
            <div className="flex sm:flex-row flex-col basis-full justify-between">
              <div className="basis-1/3">
                <h5 className="footer-heading">pages</h5>

                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/login">Blog</Link>
                <Link to="/login">Contact</Link>
              </div>
              <div className="basis-1/3">
                <h5 className="footer-heading">Service</h5>
                <a href="#">Rental</a>
                <a href="#">Repair</a>
                <a href="#">shop</a>
              </div>
              <div className=" basis-1/3">
                <h5 className="footer-heading">Information</h5>
                <a href="#">Product Support</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>

        <div className=" "></div>
      </div>
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
