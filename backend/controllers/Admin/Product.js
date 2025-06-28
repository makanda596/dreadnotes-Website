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

//DELETING OF  AN ITEM

export const deleteProduct =async(req,res)=>{
    const {id}=req.params
    try {
        const item = await Product.findByIdAndDelete(id)
        if(!item){
            return res.json({message:"the item with this id is not available"})
        }
        res.json({message:"the product  deleted succesfully"})
    } catch (error) {
        res.json(error.message)

    }
}

//editing of a item
export const editProduct = async(req,res)=>{
    const { name, desc, status, size, price } = req.body
    // const p=req.body
    const {id} = req.params
    try{
        let editItem = {... req.body}

        const updatedItem = await Product.findByIdAndUpdate({_id: id} , editItem ,{new :true})
        if(!updatedItem){
            return res.status(404).json({message:"item not found with the ID"})
        }
        
        
        console.log(updatedItem)
        res.json(updatedItem)
    }catch(error){
        res.status(400).json(error.message)
    }
}