import { useCart } from "../Store/store";
import { Button, Input, Space } from "antd";
import RenderItem from "../Components/Cart/RenderItem";
import SummaryCard from "../Components/Cart/SummaryCard";

const Cart = () => {
  const { cart } = useCart();

  return (
    <section>
      <h2 className="text-[21px] font-semibold mb-[10px]">My Cart</h2>
      <div className="grid grid-cols-[1fr_375px] gap-[10px]">
        <div className="border rounded-md p-[20px] bg-[#ffffff]">
          <h2 className="text-[18px] font-semibold mb-[10px]">
            Ready to Checkout
          </h2>
          <div className="grid grid-cols-[1fr_150px_150px_150px] mt-[24px] gap-[15px]">
            {["Product", "Quantity", "Price", "Remove"].map((el) => (
              <p className="text-argent text-[14px]" key={el}>
                {el}
              </p>
            ))}
          </div>
          <hr />

          {cart.length > 0 ? (
            <div className="grid grid-cols-[1fr_150px_150px_150px] mt-[24px] gap-[15px]">
              {cart?.map((item) => (
                <RenderItem item={item} key={item?.id} />
              ))}
            </div>
          ) : (
            <NoItemsMessage />
          )}
        </div>

        <SummaryCard />
      </div>
    </section>
  );
};

export default Cart;

const NoItemsMessage = () => {
  return (
    <div className="mt-[10px] pt-[100px] h-[100%] text-center">
      <span className="text-[18px]">No items cart</span>
    </div>
  );
};
