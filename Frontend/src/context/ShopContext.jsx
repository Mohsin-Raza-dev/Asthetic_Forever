import { createContext, useState } from "react";
import {products} from '../assets/assets.js'
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        
        if (!size) {
            toast.error("Please select a size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }
    
    const cartQuantity = () => {
        let count = 0;
        for(let id in cartItems) {
            for(let size in cartItems[id]) {
                count += cartItems[id][size];
            }
        }
        return count;
    }


    const currency = "$"
    const deliver_fee = 10;
    
    const value = {
        products,
        currency,
        deliver_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        cartQuantity
    }
return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)
}
 
export default ShopContextProvider;