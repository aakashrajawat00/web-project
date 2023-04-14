import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';

const router = express.Router();

//create tour
router.post('/',createTour);

//update tour
router.put('/:id',updateTour);

//delete  tour
router.delete('/:id',deleteTour);

//get single tour
router.get('/:id',getSingleTour);

//get All Tour
router.get('/',getAllTour);

//get Tour By Search
router.get("/search/getTourBySearch",getTourBySearch);

//get Featured Tours
router.get("/search/getFeaturedTours",getFeaturedTour);

//get Tour By Search
router.get("/search/getTourCount",getTourCount);

export default router;