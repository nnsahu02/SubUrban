const mongoose = require("mongoose");


const ProductsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide the title"],
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: [true, "Please provide the description"],
            trim: true,
        },
        category: {
            type: String,
            required: [true, "Please provide the category"]
        },
        price: {
            type: Number,
            required: [true, "Please provide the price"],
            trim: true,
        },
        productImage: {
            type: String,
            required: [true, "Please provide the productImage"],
            trim: true,
        },
        availableSizes: {
            type: [String],
            required: [true, "Please provide the availableSizes"],
            enum: {
                values: ["S", "XS", "M", "X", "L", "XXL", "XL"],
                message: "Please enter valid Size",
            },
        },
        deletedAt: {
            type: Date,
            default: null,
        },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductsSchema);
