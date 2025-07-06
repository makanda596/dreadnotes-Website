import {Product} from "../../Schema/Admin/Item.js"

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
        res.json({message:"product posted succesfully"})
    }catch(error){
        res.json(error.message)
    }
}

//count all the products avwailable

export const countProduct = async (req,res)=>{
    try {
        const count = await Product.countDocuments()
        if(count ==0) {
            return res.status(400).json({message:"Zero products in the list"})
        }
        res.status(200).json(count)
    } catch (error) {
        res.status(201).json(error.message)
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
    const {id} = req.params
    try{
        let editItem = {... req.body}

        const updatedItem = await Product.findByIdAndUpdate({_id: id} , editItem ,{new :true})
        if(!updatedItem){
            return res.status(404).json({message:"item not found with the ID"})
        }
        
        res.json({message:`the Product with this ID: ${id} has beeen updated`,updatedItem })
    }catch(error){
        res.status(400).json(error.message)
    }
}