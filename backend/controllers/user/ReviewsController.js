import { User } from "../../Schema/User/Auth.js"
import { Order } from "../../Schema/User/Order.js"
import { Review } from "../../Schema/User/Reviews.js"

export const makeReview = async(req,res)=>{
    const {orderId} = req.params
    const {userId}=req.user.id
    const {message}= req.body
    try {
        const order = await Order.findById(orderId)
        if(!order){
        return res.status(404).json({message:"order not found"})
    }
    //check if the review laeady made
    const alreadyReview = await Review.find({userId:userId,orderId:orderId})
    if(alreadyReview){
        return res.status(201).json({message:"the review already made"})
    }

    const reviewItem =  new Review({ message,  userId,orderId})

    //change the sattus after making the review to false so as not to make any other
    const user = await User.findById(userId)
        user.reviewStatus="true"

   const reviewId= await reviewItem.save()

        await User.findByIdAndUpdate(userId, { $push: { review: reviewId ._id}},{new:true})
        await User.save()
        res.status(200).json(reviewItem)
    } catch (error) {
        res.status(400).json(error.message)
    }
}