import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake, restockCake } from "./cakeSlice";
import { useState } from "react";

export default function CakeView() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  const [valueOfRestock, setValueOfRestock] = useState(3);
  return (
    <div>
      <h2>number of Cakes - {numOfCake}</h2>
      <button onClick={() => dispatch(orderCake())}>Order Cake</button>
      <button onClick={() => dispatch(restockCake(valueOfRestock))}>
        restock Cakes
      </button>
      <input
        type="number"
        value={valueOfRestock}
        onChange={(e) => setValueOfRestock(parseInt(e.target.value))}
      />
    </div>
  );
}
