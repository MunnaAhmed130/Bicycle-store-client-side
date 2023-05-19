import { useEffect, useState } from "react";
// import { Row } from "react-bootstrap";
import "./Reviews.css";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("fakeReview.json")
      // fetch("http://localhost:4000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews.name);

  return (
    <div className="reviews-container">
      <div className="review-info">
        <h2>Some Valuable Opinions!</h2>
        <h3>Reviews</h3>
      </div>
      <div className="reviews">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
