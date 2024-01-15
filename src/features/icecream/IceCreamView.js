import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamOrdered, iceCreamRestocked } from "./icecreamSlice";

function IceCreamView() {
  // const state_ = useSelector((state) => state);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  const [restock, setRestock] = useState(5);
  // console.log("state = ", state_);
  // console.log("numOfIceCreams = ", numOfIceCreams);

  return (
    <div>
      <div>
        <h2>number of Ice Creams - {numOfIceCreams}</h2>
        <button onClick={() => dispatch(iceCreamOrdered())}>
          Order Ice Cream
        </button>
        <button onClick={() => dispatch(iceCreamRestocked(restock))}>
          restock Ice Creams
        </button>
        <input
          value={restock}
          onChange={(e) => setRestock(parseInt(e.target.value))}
          type="number"
        />
      </div>
    </div>
  );
}

export default IceCreamView;
