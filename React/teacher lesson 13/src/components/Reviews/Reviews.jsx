import React from 'react'
import "./Reviews.scss";
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
  return (
    <div className='reviews'>
        <div className="container">
            <div className="content">
                <div className="content__header">
                    <h2>Testimonials</h2>
                    <p>Some quotes from our happy customers</p>
                </div>
                <div className="content__body">
                    <div className="reviews-list">
                        <ReviewCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews