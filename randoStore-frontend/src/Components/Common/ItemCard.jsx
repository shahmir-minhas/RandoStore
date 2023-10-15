import { Button, Input, message } from "antd";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { useCart } from "../../Store/store";

const ItemCard = ({ data }) => {
  const [Quantity, setQuantity] = useState(1);
  const { cart, setCart } = useCart();

  //===============================
  //          Handlers
  //===============================
  const onIncrement = () => {
    setQuantity((preState) => preState + 1);
  };
  const onDecrement = () => {
    if (Quantity > 1) setQuantity((preState) => preState - 1);
  };

  const addToCart = () => {
    let cartItems = [...cart];
    if (cart.some((item) => item?.id === data.id)) {
      cartItems = cart.map((item) => {
        if (item.id === data.id) {
          return { ...item, quantity: item.quantity + Quantity };
        }
        return item;
      });
    } else {
      cartItems.push({ ...data, quantity: Quantity });
    }

    setCart(cartItems);
    message.success(`${data?.name} added to cart!`);
  };

  return (
    <div className="bg-[#ffffff] h-[380px] w-[250px] rounded-md p-[20px] flex flex-col justify-between border group hover:border-[#2681C1] shadow-lg" >
      <div>
        <img
          src={data?.img}
          alt=""
          className="w-full object-contain group-hover:scale-105 transition-all ease-linear  "
          
        />
      </div>

      <div className="mt-[20px] flex gap-3 flex-col">
        <p className="text-[20px] ">{data.name}</p>
        <div className="flex gap-2 items-center">
          <p>Quantity</p>

          <Input
            className="w-[100px] text-center quantity-input "
            suffix={
              <PlusCircleTwoTone
                className="cursor-pointer "
                onClick={onIncrement}
              />
            }
            prefix={
              <MinusCircleTwoTone
                className="cursor-pointer"
                onClick={onDecrement}
              />
            }
            value={Quantity}
            // onChange={({ target }) => setQuantity(+target.value)}
          />
        </div>
        <p>Price: {data.price} PKR</p>
        <Button
          className="bg-[#2681C1] w-[150px] rounded-md mx-auto text-[#ffffff] font-semibold mt-[10px]"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
