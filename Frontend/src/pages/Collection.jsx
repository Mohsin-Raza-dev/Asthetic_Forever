
import { useCallback, useContext, useEffect, useState } from 'react';
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/assets';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);
  const [sortOption, setSortOption] = useState("relevent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
    
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, [products])

  const applyFilter = useCallback(() => {
    let filtered = products.slice();

    if (showSearch && search) {
      filtered = filtered.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((items) => category.includes(items.category));
    }
    if (subCategory.length > 0) {
      filtered = filtered.filter((items) =>
        subCategory.includes(items.subCategory)
      );
    }
        setFilterProducts(filtered);
  }, [products, search, showSearch, category, subCategory]);

  const sortProduts = useCallback(() => {
    let filtered = filteredProducts.slice();
     
    switch (sortOption) {
      case "relevent":
        break;
      case "low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        break;
    }
  },[filteredProducts, sortOption, applyFilter])

  useEffect(() => {
    applyFilter();
  }, [applyFilter])

  useEffect(() => {
    sortProduts();
  }, [sortProduts])

const handleSortChange = (e) => {
  setSortOption(e.target.value);
};
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* left side Filter section */}
        <div className="min-w-60">
          <p
            onClick={handleShowFilter}
            className=" my-2 mt-5 flex items-center gap-2 cursor-pointer"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              alt="dropdown icon"
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </p>

          <div
            className={`border border-gray-300 pl-5 py-5 mt-4 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="text-gray-500 text-sm font-medium mb-2">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Men"}
                  onChange={toggleCategory}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                Kids
              </p>
            </div>
          </div>
          <div
            className={`border border-gray-300 pl-5 py-5 mt-6 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="text-gray-500 text-sm font-medium mb-2">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="flex-1">
          <div className="flex flex-col justify-between text-base sm:text-2xl mb-4">
            <div className="flex justify-between">
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
              <select
                onChange={handleSortChange}
                defaultValue={"relevent"}
                className="border border-gray-400 text-sm px-2"
              >
                <option value="relevent">Sort by: Relevent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection