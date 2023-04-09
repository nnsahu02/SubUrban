const productModel = require('../Model/productModel');
const { uploadFile } = require('./awsController');



const createProduct = async (req, res) => {
    try {
        const bodyData = req.body
        const file = req.files

        if (typeof (bodyData) == "undefined" || Object.keys(bodyData).length == 0)
            return res.status(400).send({
                status: false,
                message: "Request body doesn't be empty"
            })

        const { title, description, price, availableSizes } = bodyData

        if (!title || !description || !price) {
            return res.status(400).send({
                status: false,
                message: "All fields are required."
            })
        }

        if (availableSizes || availableSizes == '') {
            let sizeArr = availableSizes.toUpperCase().split(",")
            let arr = ["S", "XS", "M", "X", "L", "XXL", "XL"]
            for (let i = 0; i < sizeArr.length; i++) {
                if ((!arr.includes(sizeArr[i]))) return res.status(400).send({
                    status: false,
                    message: "availableSizes is not given format, Please follow the size enum ['S', 'XS', 'M', 'X', 'L', 'XXL', 'XL']"
                })
            }
            bodyData.availableSizes = sizeArr
        }

        if (file && file.length > 0) {
            let uploadfile = await uploadFile(file[0]);
            bodyData.productImage = uploadfile;
        } else {
            return res.status(400).send({
                status: false,
                message: "Upload profile Image"
            });
        }

        const productData = await productModel.create(bodyData)
        return res.status(201).send({
            status: true,
            message: "Product created successfully",
            data: productData
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find()

        return res.status(200).send({
            status: true,
            data: products
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}


const getProductsById = async (req, res) => {
    try {

        const id = req.params.id

        const productData = await productModel.findById({ _id: id })

        return res.status(200).send({
            status: true,
            data: productData
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}



module.exports = { createProduct, getAllProducts, getProductsById }