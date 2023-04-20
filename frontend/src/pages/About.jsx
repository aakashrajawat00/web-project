import React from 'react';
import '../styles/about.css'
import aakash from '../assets/images/aakash2.jpg'
import darshit from '../assets/images/darshit3.jpg'
import vatsal from '../assets/images/vatsal1.jpg'
import vadip from '../assets/images/vadip1.jpg'
import harsh from '../assets/images/harsh1.jpg'


const About = () => {
  return (
    <div className="container mt-.5">
      <h1>About Us</h1>
      <p>
        We are a team of passionate travelers who want to share our love of
        exploring the world with others. Our goal is to provide you with the
        best travel experiences possible, whether you're looking to relax on a
        beach, hike through mountains, or immerse yourself in a new culture.
      </p>
      <p>
        Our expert team has years of experience in the travel industry and can
        help you plan every aspect of your trip. From finding the best flights
        to booking unique accommodations and activities, we're here to make
        your travel dreams a reality.
      </p>
      <p>
        Thank you for choosing us as your travel partner. We look forward to
        helping you plan your next adventure!
      </p>

      <h3>Our Team</h3>
      <div className="row mt-5">
  <div className="col-md-4 mb-4">
    <div className="card mr-4">
      <img
        className="card-img-top"
        src= {aakash}
        alt="team member"
      />
      <div className="card-body">
        <h5 className="card-title">Aakash Rajawat</h5>
        <p className="card-text">Student</p>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="card mr-4">
      <img
        className="card-img-top"
        src={darshit}
        alt="team member"
      />
      <div className="card-body">
        <h5 className="card-title">Darshit Shah</h5>
        <p className="card-text">Student</p>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="card">
      <img
        className="card-img-top"
        src={vatsal}
        alt="team member"
      />
      <div className="card-body">
        <h5 className="card-title">Vatsal Mehta</h5>
        <p className="card-text">Student</p>
      </div>
    </div>
  </div>
  <div className="row mt-5 d-flex justify-content-center">
  <div className="col-md-4 mb-4">
    <div className="card mr-4">
      <img
        className="card-img-top"
        src={vadip}
        alt="team member"
      />
      <div className="card-body">

        <h5 className="card-title">Vidip Kamdar</h5>
        <p className="card-text">Student</p>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="card mr-4">
      <img
        className="card-img-top"
        src={harsh}
        alt="team member"
      />
      <div className="card-body">
        <h5 className="card-title">Harsh Jain</h5>
        <p className="card-text">Student</p>
      </div>
    </div>
  </div>
</div>
</div>


    </div>
  );
};

export default About;
