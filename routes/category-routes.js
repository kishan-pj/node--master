const express =require('express')
const categoryController=require('../controllers/categories_controller')

const router =express.Router()

router.route('/')
.get(categoryController.getallCategory)
.post(categoryController.createCategory)
.put((req,res)=>res.status(501).json({"reply":"Method not supported"}))
.delete(categoryController.deleteCategory)

router.route('/:category_id')
.get(categoryController.getallCategoryById)
.put(categoryController.updateallCategoryById)
.post((req,res)=>res.status(501).json({"reply":"Method not supported"}))
.delete(categoryController.deleteCategoryById)

module.exports=router