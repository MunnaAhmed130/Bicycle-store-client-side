import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './Review.css'

const Review = () => {
    let { user, success, setSuccess } = useAuth();
    const [value, setValue] = React.useState(1);
    const { register, handleSubmit } = useForm();
    const initialvalue = { name: user.displayName, rating: value, url: user.photoURL };
    console.log(initialvalue)
    const onSubmit = data => {
        const reviewData = { ...data, ...initialvalue }
        console.log(reviewData)
        if (value !== null) {
            axios.post('https://agile-island-88744.herokuapp.com/reviews', reviewData)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        setSuccess(true);
                    }
                })
        }

    };

    console.log(value)
    return (
        <div id='review'>
            <h2>Please Give Us Your valuable opinion!</h2>
            {success && <Alert severity="success" className="review-success">You have successfully add a review</Alert>}
            {success || <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Your Name" defaultValue={user.displayName} required="required" /> <br />
                <input {...register("profession")} placeholder="Your Profession" required="required" /> <br />
                <div className=''>
                    <p className='mb-0'>Please give us a rating</p>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        required="required"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    /></div>

                <textarea type="text" {...register("description")} placeholder="Short description" required="required" /> <br />
                <Button type="submit">Submit</Button>
            </form>}
        </div>
    );
};

export default Review;