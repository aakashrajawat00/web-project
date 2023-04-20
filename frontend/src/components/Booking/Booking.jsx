import React,{useState, useContext} from "react";
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const today = new Date();
const minDate = today.toISOString().slice(0, 10);

const Booking = ({tour, avgRating }) => {

    const {price, reviews, title} = tour;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email ,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt:'',
    });

    const handleChange = e => {
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}));
    }; 

    const validateFullName = (fullName) => {
        const regex = /\d/;
        return fullName.length >= 7 && !regex.test(fullName);
      }
      

    const validatePhone = (phone) => {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    }

    const validateDate = (date) => {
        const today = new Date();
        const selectedDate = new Date(date);
        return selectedDate > today;
    }

    const validateGuestSize = (guestSize) => {
        return guestSize >= 1 && guestSize <= 10;
    }

    const serviceFee = 10;
    const totalAmount = 
        Number(price) * Number(booking.guestSize) + Number(serviceFee);

    const handleClick = async e=>{
        e.preventDefault();

        console.log(booking);

        try {
            if(!user || user === undefined || user === null){
                return alert("Please sign in ");
            }

            if (!validateFullName(booking.fullName)) {
                return alert("Full Name should not contain any digit and have minimum 7 characters");
            }

            if (!validatePhone(booking.phone)) {
                return alert("Phone number should be valid and have 10 digits");
            }

            if (!validateDate(booking.bookAt)) {
                return alert("Please select a valid date");
            }

            if (!validateGuestSize(booking.guestSize)) {
                return alert("Guest size should be between 1 and 10");
            }

            const res = await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            });
            const result = await res.json()

            if(!res.ok){
                return alert(result.message);
            }
            navigate('/thank-you');
            //navigate('/payment')
        } catch (err) {
            alert(err.message);
        }
        navigate('/thank-you')
        
    }
    return (
    <div className="bookings">
        <div className="booking__top d-flex align-items-center 
        justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center ">
            <i class = 'ri-star-s-fill'></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
            
          </span> 
        </div>

        <div className="booking__form">
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={{handleClick}}>
                <FormGroup>
                    <input type="text" placeholder="Full Name" id="fullName"
                    required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="tel" placeholder ="Contact Number" id="phone" minLength="10" maxLength="10" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className="d-flex align-items-center gap-3">
                <input type="date" placeholder="" id="bookAt"
                                required onChange={handleChange} min={minDate}/>
                <input type="number" placeholder="Guest" id="guestSize"
                                required onChange={handleChange} min="1" max="10"/>
                </FormGroup>
            </Form>
        </div>
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">
                    ${price} <i class='ri-close-line'></i>1 person</h5>
                   <span> ${price}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Service charge</h5>
                    <span> ${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span> ${totalAmount}</span>
                </ListGroupItem>
    </ListGroup>
    <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Ticket</Button>
    </div>

</div>
);
}



export default Booking;
