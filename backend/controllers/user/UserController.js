import {Product} from "../../Schema/Admin/Item.js"
import { User } from "../../Schema/User/Auth.js"
import { CancelledOrder } from "../../Schema/User/CancelledOrder.js"
import { Cart } from "../../Schema/User/Cart.js"
import { Order } from "../../Schema/User/Order.js"

export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({}).sort({createdAt:-1})
        if(!products){
            return res.json({message:"no product found"})
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(201).json(error.message)
    }
}

export const getCart = async(req,res)=>{
    const {userId}=req.user.id

    try{
               const cart = await Cart.find(userId)
        .populate({
            path:"productId",
            select:"name desc size price status category"
        })
        if(!cart){
        return res.status(404).json({message:"no item found on the cart"})
        }
        res.status(200).json(cart)
    }catch(error){
        res.status(400).json(error.message)
    }
}

export const OneProduct = async (req,res)=>{
    const {id}=req.params
    try {
        const product = await Product.findOne({_id:id})
        if(!product){
            return res.status(401).json({message:'no product found with this Id'})

        }
        res.status(200).json(product)
    } catch (error) {
        res.status(201).json(error.message)
    }
}

export const AddToCart = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.id;

    try {
        const item = await Product.findById(productId);
        if (!item) {
            return res.status(404).json({ message: "No product found with this ID" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: "Please log in" });
        }

        const cartAlreadyExist = await Cart.findOne({ productId, userId });
        if (cartAlreadyExist) {
            return res.status(400).json({ message: "This item is already in your cart" });
        }

        const cartItem = new Cart({ productId, userId });
        const savedItem = await cartItem.save();

        await User.findByIdAndUpdate(userId, { $push: { cart: savedItem._id } }, { new: true });
        console.log(user)
        res.status(200).json({ message: "Item saved to cart successfully", savedItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const CountCart = async (req,res)=>{
    const {userId}= req.params
    try {
        const countCart = await Cart.countDocuments(userId)
        res.status(200).json({message:`you have ${countCart} Items`,countCart})
    } catch (error) {
       res.status(201).json(error.message) 
    }
}

export const deleteCart = async (req,res)=>{
    const {userId}=req.user.deletedItem
    const {id}=req.params
    try {
        const cartItem = await Cart.findOneAndDelete({id,userId})
        if(!cartItem){
            return res.status(201).json({message:"this cartItem does not exist"})
        }
       
        await User.findByIdAndUpdate(userId, { $pull: { cart:cartItem._id}},{new:true})
        await cartItem.save()
        res.status(200).json({message:"item removed from the cart",cartItem})

    } catch (error) {
        res.status(201).json(error.message)

    }
}
export const makeOrder = async (req,res)=>{
    const {userId}= req.user.id
    const{productId}= req.params
    try {
        const order= await Product.findById(productId)
        if(!order){
            return res.status(404).json({message:"no item with this id found"})
        }
        const timeCheck = new Date(Date.now()+"15*60*1000")
        if (order.time > timeCheck ){
            return res.status(201).json({message:"you cant cancel the order now because your time has elapsed"})
        }
        const orderItem = new Order({
            userId:userId,
            productId:productId,
        })

       const orderdItem = await orderItem.save()
        await User.findByIdAndUpdate(userId, { $push: { order: orderdItem._id } }, { new: true }) 
        
        res.status(200).json({message:"order made succesfully",orderdItem})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const countOrder = async (req,res)=>{
    const {userId}=req.user.id
    try {
        const countOrder = await Order.countDocuments(userId)
        res.status(200).json({message:`you got ${countOrder}`,countOrder})
    } catch (error) {
        res.status(201).json(error.message)
    }
}

export const getOrder = async (req,res)=>{
    const {userId}= req.user.id
    try {
        const order = await Order.find({}).sort({createdAt:-1})
        if(!order){

            return res.status(401).json({message:"no order found"})
        }
        res.status(200).json({message:"succesfully fettched the orders",order})
    } catch (error) {
        res.status(201).json(error.message)

    }
}

export const cancelOrder = async (req,res)=>{
    const {userId} = req.user.id
    const {_id:orderId} = req.params
    try{
        const order = await Order.findOneAndDelete({userId,orderId})
        if(!order){
            return res.status(401).json({message:"no order found with the ID"})
        }

        await User.findByIdAndUpdate(userId,{$pull:{order:order._id}},{new:true})
        await order.save()
        const orderCancelled = new CancelledOrder({
            orderId,
            userId:userId
        })
        await orderCancelled.save()
        res.status(200).json({message:"order succesfully cancelled waiting for the approval",orderCancelled})
    }catch(error){
        res.status(201).json(error.message)
    }
}