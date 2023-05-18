// import { Col, Row } from "react-bootstrap";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { name, url, profession, description, rating } = review;
  //   const [value, setValue] = React.useState(rating);
  // console.log(value)
  const animate = true;
  return (
    <div className={animate && `animate-fadeOut`}>
      <div>
        <div className="single-review">
          <div className="col">
            <div className="reviewer">
              <h3>{name}</h3>
              {url && <img className="review-img" src={url} alt="" />}
              <br />
            </div>
            <h4>{profession}</h4>
            <br />
            {/* <Rating name="read-only" value={value} readOnly /> */}
            <br />
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
