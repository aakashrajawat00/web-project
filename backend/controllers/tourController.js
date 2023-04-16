import Tour from '../models/Tour.js' 

//create new tour
export const createTour = async (req,res) => {
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()

        res.status(200).json({success:true, message:'Successfully created',data:savedTour});
    }
    catch(err){
        res.status(500).json({success:false, message:'Failed to create'});

    }
};

//update tour
export const updateTour = async (req,res) => {
    const id = req.params.id;
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({success:true, message:'Successfully updated',data:updatedTour});

    }
    catch(err){
        res.status(500).json({success:false, message:'Failed to update'});

    }
};



//delete Tour
export const deleteTour = async (req,res) => {
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({success:true, message:'Successfully Deleted'});

    }
    catch(err){
        res.status(500).json({success:false, message:'Failed to Delete'});
    }

};



//Get Single Tour
export const getSingleTour = async (req,res) => {
    const id = req.params.id;
    try{
       const tour = await Tour.findById(id);

        res.status(200).json({success:true, message:'Succesful',data:tour});

    }
    catch(err){
        res.status(404).json({success:false, message:'Not Found'});
    }


};

//Get All Tour
export const getAllTour = async (req,res) => {

    //for Pagination 
    const page = parseInt(req.query.page)

    try{
        const tours = await Tour.find({}).skip(page*8).limit(8)

        res.status(200).json({success:true, count:tours.length,message:'Succesful',data:tours});

    }
    catch(err){
        res.status(404).json({success:false, message:'Not Found'});
    }
};

export const getTourBySearch = async(req,res) =>{
    const city = new RegExp(req.query.city,'i') //i means case sensitive    
    const distance  = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{

        //gte is greater than equal to
        const tours = await Tour.find({city, distance:{$gte: distance},maxGroupSize:{$gte:maxGroupSize}});
        res.status(200).json({success:true, message:'Succesful',data:tours});

    }
    catch(err){
        res.status(404).json({success:false, message:'getTourBySearch not Found'});

    }
};


//Get Featured Tour
export const getFeaturedTour = async (req,res) => {

    //for Pagination 
    try{
        const tours = await Tour.find({featured:true}).limit(8)

        res.status(200).json({success:true,message:'Succesful',data:tours});

    }
    catch(err){
        res.status(404).json({success:false, message:'Not Found'});
    }
};

//Get Tour Counts
export const getTourCount = async (req,res) =>{
    try{
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,data:tourCount});

    }
    catch(err){
        res.status(404).json({success:false, message:'Failed To Fetch'});
    }
}