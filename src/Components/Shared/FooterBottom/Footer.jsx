// import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const FooterBottom = () => {
  return (
    <div className="footer fixed-bottom">
      <div className="footer-top">
        <div className="w-100 m-0 pb-4 pt-3">
          <div className="footer-col ps-5">
            <h5>About Bicycle Zone</h5>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Newsroom</a>
            <a href="#">Career</a>
          </div>
          <div className="footer-col ps-5">
            <h5>Support</h5>
            <a href="#">Product Support</a>
            <a href="#">Community</a>
            <a href="#">Report Abuse</a>
          </div>
          <div className="footer-col ps-5">
            <h5>Account</h5>
            <a href="#">Renewal &amp; Billing</a>
            <a href="#">My Products</a>
            <a href="#">Create Account</a>
          </div>
          <div className="footer-col ps-5">
            <h5>Customer Services</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="mb-0">All Rights Reserved by Munna Ahmed</p>
      </div>
    </div>
  );
};

export default FooterBottom;
