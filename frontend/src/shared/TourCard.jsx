// import React from 'react';
// import { Card, CardBody } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import calculateAvgRating from '../utils/avgRating';

// import './tour-card.css';

// const TourCard = ({ tour }) => {

//   const { _id, title, city, photo, price, featured, reviews } = tour;

//   const { totalRating, avgRating } = calculateAvgRating(reviews)

//   return <div className='tour__card'>
//     <Card>
//       <div className='tour__img'>
//         <img src={photo} alt='tour-img' />
//         {featured && <span>Featured</span>}
//       </div>


//       <CardBody>

//         <div className="card__top d-flex align-items-center justify-content-between">
//           <span className="tour location d-flex align-items-center gap-1">
//             <i class="ri-map-pin-line"></i> {city}
//           </span>
//           <span className="tour__rating d-flex align-items-center gap-1">
//             <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
//             {totalRating === 0 ? (
//               "Not rated"
//             ) : (
//               <span> ({reviews.length}) </ span>
//             )}
//           </span>
//         </div>

//         <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

//         <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
//           <h5>${price} <span> /per person</span></h5>

//           <button className="btn booking__btn">
//             <Link to={`/tours/${_id}`}>Book Now</Link>

//           </button>

//         </div>
//       </CardBody>
//     </Card>


//   </div>
// };

// export default TourCard;



import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import StripeCheckout from 'react-stripe-checkout';

import './tour-card.css';

const TourCard = ({ tour }) => {

  const { _id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  const [paid, setPaid] = useState(false);

  const handleToken = (token) => {
    // make API call to your server to process payment
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify(token)
    })
    .then(response => {
      // payment successful
      setPaid(true);
    })
    .catch(error => {
      // payment failed
      console.error(error);
    });
  }

  return <div className='tour__card'>
    <Card>
      <div className='tour__img'>
        <img src={photo} alt='tour-img' />
        {featured && <span>Featured</span>}
      </div>


      <CardBody>

        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour location d-flex align-items-center gap-1">
            <i class="ri-map-pin-line"></i> {city}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? (
              "Not rated"
            ) : (
              <span> ({reviews.length}) </ span>
            )}
          </span>
        </div>

        <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
          <h5>${price} <span> /per person</span></h5>

          <StripeCheckout
            token={handleToken}
            stripeKey='sk_test_51Myjc0JNnJKzFds8X4VrUY8d6UZTiIwgI03ekqVwXAmeAGgpjMbqSny0hPVQDVxUHX8PI80xm5PGLojAHpgVQzJd00W7Bwbk7D'
            amount={price * 100} // amount in cents
            currency='USD'
            name='Tour Booking'
            billingAddress
            shippingAddress
          >
            <button className="btn booking__btn">Book Now</button>
          </StripeCheckout>
              
        </div>
      </CardBody>
    </Card>


  </div>
};

export default TourCard;