import Product from "../../Schema/Item.js"

export const postProduct = async(req,res)=>{
    const {name,desc,status,category,size,price}=req.body

    try{
        if (!name || !desc || !status || !category || !size || !price){
            return res.json({message:"please fill all fields"})
        }
        const product = new Product({
            name,
            desc,
            status,
            category,
            size,
            price
        })
        await product.save()
        console.log(product)
        res.json({message:"product posted succesfully"})
    }catch(error){
        res.json(error.message)
    }
}

export const deleteProduct =async(req,res)=>{
    const {id}=req.params
    try {
        const item = await Product.findByIdAndDelete(id)
        if(!item){
            return res.json({message:"the item with this id is not available"})
        }
    } catch (error) {
        res.json(error.message)

    }
}