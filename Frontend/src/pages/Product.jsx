import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [reviewCount, setReviewCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id.toString() === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      const reviewCount = Math.floor(Math.random() * 281) + 20;
      setReviewCount(reviewCount);
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt={`product ${index}`}
                key={index}
                onClick={() => setImage(item)}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded border-2 ${
                  image === item ? "border-gray-300" : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="Main product"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>

        {/* Product Details */}

        <div className="flex-1">
          <h1 className=" font-medium text-2xl sm:text-3xl prata-regular">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="text-gray-500 ml-2">
              <span className="text-gray-500">({reviewCount})</span>
            </p>
          </div>
          <p className="mt-4 text-gray-500 font-medium text-2xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-3 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className=" text-gray-500 font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSelectedSize(item)}
                  className={`border border-gray-200 px-4 py-2 hover:transform hover:scale-102 transition ease-in-out duration-300 bg-gray-50} ${
                    selectedSize === item ? "border-gray-900" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex gap-2 my-5">
              <button
                className="border border-gray-400 bg-black text-white px-6 py-2 hover:transform hover:scale-102 transition ease-in-out duration-300"
              >
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col">
              <hr className="w-3/4 sm:w-4/5 border-none h-[1px] bg-gray-300" />
              <div className="flex flex-col gap-2 mt-3 text-gray-500 text-sm">
                <p>100% Original Product.</p>
                <p>Cash on Delivery Available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------- Description and Reviews Section -------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm font-medium">
            Reviews {`(${reviewCount})`}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-gray-500 border border-gray-400 p-6 text-sm">
          <p>{productData.description}</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut est
            nihil nobis reiciendis assumenda officiis deleniti quas non
            delectus, iusto officia exercitationem ducimus, hic itaque eligendi.
            Perspiciatis corporis reiciendis rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quo iusto laudantium dolor sed officiis animi reprehenderit rerum
            reiciendis nobis architecto quisquam voluptatibus incidunt,
            asperiores perferendis iste repellat autem fugit!
          </p>
        </div>
      </div>

      {/* ------------- Related Products Section -------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="py-10 text-center text-gray-500 text-xl">Loading...</div>
  );
};

export default Product;
