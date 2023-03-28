import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {

  const { id, title, photo, price, featured, avgRating, reviews } = tour

  return <div className='tour_card'>
    <Card>
      <div className='tour_img'>
        <img src={photo} alt='tour-img' />
        <span>Featured</span>
      </div>
    </Card>

    <CardBody>

      <div className="card _top d-flex align-items-center justify-content-between">
        <span className="tour location d-flex align-items-center gap-1">
          <i class="ri-map-pin-line"></i> {city}
        </span>
        <span className="tour _rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i> {avgRating}{" "}
          <span> ({reviews.length}) </ span>
        </span>
      </div>
    </CardBody>
  </div>
};

export default TourCard;