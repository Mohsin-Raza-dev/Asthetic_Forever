import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'


export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    if (!name || !price || !category || !subCategory || !sizes) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0];
    const image3 = req.files.image3?.[0];
    const image4 = req.files.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
      );
      
      let parsedSizes = [];

      try {
        parsedSizes = JSON.parse(sizes);
        if (!Array.isArray(parsedSizes)) {
          parsedSizes = [parsedSizes];
        }
      } catch {
        parsedSizes = sizes.split(",").map((s) => s.trim());
      }

      if (parsedSizes.length === 0) {
        return res.status(400).json({
          success: false,
          message: "At least one size must be provided",
        });
      }

    const newProduct = new productModel({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: parsedSizes,
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: new Date(),
    });

    const product = await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Product upload failed:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            products,
        });
    } catch (error) {
        console.error("Product list failed:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};
export const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        })
        
    } catch (error) {
        console.error("Product delete failed:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error.message,
        });
    }
}
export const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            product
        })
        
    } catch (error) {
        console.error("Product fetch failed:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error.message,
        });
        
    }
}