import Rating from '@mui/material/Rating';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './SingleReview.css'

const SingleReview = ({ review }) => {
    const { name, url, profession, description, rating } = review;
    const [value, setValue] = React.useState(rating);
    // console.log(value)
    return (
        <div>
            <Col>
                <Row className="single-review">
                    <Col>
                        <div className="reviewer">
                            <h3>{name}</h3>
                            {url && <img className="review-img" src={url} />}<br />
                        </div>
                        <h4>{profession}</h4><br />
                        <Rating name="read-only" value={value} readOnly />
                        <br />
                        <p className="">{description}</p>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default SingleReview;