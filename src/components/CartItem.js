import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, dereaseAmount } =
    useContext(CartContext);

  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[140px] flex items-center gap-x- 4 ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px] mr-10" src={image} alt="1" />
        </Link>
        <div className="w-full flex flex-col ">
          <div className="flex justify-between mb-2 ">
            <Link
              to={`/product/${id}`}
              className=" text-sm uppercase font-medium max-w-[200px] text-primary hover:underline "
            >
              {title}
            </Link>
            <button onClick={() => removeFromCart(id)} className="text-xl">
              <IoMdClose className=" text-red-500 hover:text-red-700 transition " />
            </button>
          </div>

          <div className="flex gap-x-2 h-[28px] ">
            <div className="flex flex-1 max-w-[80px]  items-center h-full border text-primary font-medium">
              <button
                onClick={() => dereaseAmount(id)}
                className="flex-1 text-red-600 h-full flex justify-center items-center"
              >
                <IoMdRemove />
              </button>
              <div className="h-full flex justify-center items-center px-2 ">
                {amount}
              </div>
              <button
                onClick={() => increaseAmount(id)}
                className="flex-1 text-green-600 h-full flex justify-center items-center "
              >
                <IoMdAdd />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
