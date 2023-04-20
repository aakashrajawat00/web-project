import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png' 
import guideImg from '../assets/images/guide.png' 
import customizationImg from '../assets/images/customization.png' 

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Check Weather",
        desc: "Plan ahead with ease by checking the weather for your destination on our website.",
      },
      {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Discover the world with our expertly crafted travel guides and explore the history of the place.",
       },
       { imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your travel experience to your preferences with our customizable tour packages.",
       },
]
const serviceList = () => {
  return <>
    {
        servicesData.map((item,index) =>(
            <Col lg='3' md='6' sm='12' className='mb-4' key={index} >
                <ServiceCard item={item}  />
            </Col>
        ))
    }
  </>
}

export default serviceList