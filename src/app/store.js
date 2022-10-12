import { configureStore } from "@reduxjs/toolkit";

import { inventoryReducer } from "../features/inventory/inventorySlice";
import { cartReducer } from "../features/cart/cartSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer,
  },
});
