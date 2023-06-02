import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black lg:px-20 md:px-10 px-5  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h5 className="footer-heading">Bicycle Zone</h5>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="footer-heading">pages</h5>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Newsroom</a>
            <a href="#">Career</a>
            <a href="#">Product Support</a>
            <a href="#">Community</a>
            <a href="#">Report</a>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="footer-heading">Service</h5>
            <a href="#">Rental</a>
            <a href="#">Repair</a>
            <a href="#">shop</a>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="footer-heading">Customer Services</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Disclaimer</a>
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
