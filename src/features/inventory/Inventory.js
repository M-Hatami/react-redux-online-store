import React, { useEffect } from "react";

import {
  calculatePrice,
  getCurrencySymbol,
} from "../../utilities/utilities.js";
import { addItem } from "../cart/cartSlice.js";
import { loadData } from "./inventorySlice";

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (inventory.length === 0) {
    return (
      <p>
        {" "}
        ببخشید، هیچ محصولی با کلمه مورد جستجوی شما مطابقت نمیکند، میخواهید شرایط
        جستجویتان را تغییر دهید؟{" "}
      </p>
    );
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={""} />
        <h3>{name}</h3>
        <h3 className="price">
          {displayPrice.toFixed(2)} {getCurrencySymbol(currencyFilter)}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          افزودن به سبد
        </button>
      </li>
    );
  }
};
