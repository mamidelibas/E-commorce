import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full  bg-white fixed overflow-auto top-0 h-full shadow-2xl md:w-[35px xl:max-w-[55vw] transition-all duration-500 z-20 px-4 lg:px-[35px]  `}
    >
      <div className=" flex items-center justify-between w-1/2 py-6 border-b fixed  z-10 transition-all bg-white">
        <div className="uppercase mr-80 text-sm font-semibold">
          Shopping Bag [ {itemAmount} ]
        </div>
        <div className="uppercase text-gray-400 mr-12">
          <span className=" mr-2 ">Total :</span>${parseFloat(total).toFixed(2)}
        </div>
        <button
          onClick={handleClose}
          className="w-8 h-8 font-bold flex items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>

      <div className="mt-16">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex flex-col gap-y-5 py-4 my-5">
        <div className="flex w-full justify-around items-center">
          <div className="uppercase font-semibold">
            <span className=" mr-2 ">Total :</span>$
            {parseFloat(total).toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className=" py-4 rounded-md bg-red-600 text-white w-20 h-12 flex justify-center items-center text-xl "
          >
            <FiTrash2 />
          </button>
        </div>

        <Link
          to="/"
          className="bg-gray-200 rounded-md flex p-4 justify-center items-center text-primary w-full font-medium "
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-[#000000] rounded-md flex p-4 justify-center items-center text-white w-full font-medium "
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
