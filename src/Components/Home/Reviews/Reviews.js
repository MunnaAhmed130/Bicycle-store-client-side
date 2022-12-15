import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Reviews.css";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://bicycle-store-server-side.vercel.app/reviews")
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
            <Row xs={1} sm={1} md={2} lg={2} xl={3} className="reviews">
                {reviews.map((review) => (
                    <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>
                ))}
            </Row>
        </div>
    );
};

export default Reviews;
