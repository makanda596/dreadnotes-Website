import Product from "../../Schema/Admin/Item.js"

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
    try{
        
    }catch(error){
        
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