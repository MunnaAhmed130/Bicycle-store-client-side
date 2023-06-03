import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black lg:px-20 md:px-10 px-5 py-5 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid  grid-flow-col grid-rows-2 gap-4">
          <div className="row-span-2">
            <h5 className="footer-heading">Bicycle Zone</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe eius tempore autem.
            </p>
          </div>

          <div className=" col-span-2">
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
              {/* <a href="#">Career</a> */}
              {/* <a href="#">Community</a> */}
              {/* <a href="#">Report</a> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="">
        <p className=" text-center py-2">All Rights Reserved by Munna Ahmed</p>
      </div>
    </footer>
  );
};

export default Footer;
