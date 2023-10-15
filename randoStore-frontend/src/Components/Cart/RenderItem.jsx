import {
  CloseCircleTwoTone,
  MinusCircleTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { useCart } from "../../Store/store";

const RenderItem = ({ item }) => {
  const { cart, setCart } = useCart();

  const onIncrement = () => {
    setCart(
      cart.map((el) =>
        el.id === item.id ? { ...item, quantity: item?.quantity + 1 } : el
      )
    );
  };

  const onDecrement = () => {
    setCart(
      cart.map((el) => {
        if (el.id === item.id) {
          if (item.quantity > 1)
            return { ...item, quantity: item.quantity - 1 };
          else message.error("Quantity must be greatar than 0!");
        }
        return el;
      })
    );
  };
  const removeItem = () => {
    setCart(cart.filter((el) => el.id !== item.id));
  };
  return (
    <>
      <p>{item?.name}</p>
      <div className="flex gap-2 w-[90px] justify-between">
        <PlusCircleTwoTone className="cursor-pointer " onClick={onIncrement} />
        <div className="border px-[4px] rounded-md w-[30px] text-center">
          {item?.quantity}
        </div>
        <MinusCircleTwoTone className="cursor-pointer" onClick={onDecrement} />
      </div>
      <p>{+item?.price * item?.quantity}</p>
      <CloseCircleTwoTone className="w-fit" onClick={removeItem} />
    </>
  );
};

export default RenderItem;
