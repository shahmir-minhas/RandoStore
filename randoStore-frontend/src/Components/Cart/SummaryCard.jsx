import { Button, Input, Space } from "antd";
import { useCart } from "../../Store/store";

const SummaryCard = () => {
  const { cart } = useCart();
  return (
    <div className="border rounded-md p-[20px] bg-[#ffffff]">
      <h4 className="text-[14px] text-[#111111] mb-[5px]">Have a Coupon?</h4>
      <Space.Compact className="w-[100%] h-[50px]">
        <Input placeholder="Enter coupon code" />
        <Button className="bg-[#1AAE56] border-[#1AAE56] border text-[#ffffff] h-[50px]">
          Submit
        </Button>
      </Space.Compact>
      <h3 className="text-[16px] font-semibold text-prussianBlue mt-[18px]">
        Order Summary
      </h3>
      <div className="border-b border-steam flex justify-between py-[18px]">
        <h5 className="text-dreamless  font-semibold">Delivery Charges</h5>
        <p className="text-metallicBlue font-semibold ">200 PKR</p>
      </div>
      <div className="border-b border-steam flex justify-between py-[18px]">
        <div className="flex flex-col gap-[16px]">
          {["Discount", "Subtotal"].map((el) => (
            <h5 className="text-dreamless  font-semibold" key={el}>
              {el}
            </h5>
          ))}
        </div>
        <div className="text-end flex flex-col gap-[16px]">
          <p className="">
            <span className="text-argent"></span> 0 PKR
          </p>
          <p className="">
            {cart?.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue?.price * currentValue?.quantity,
              0
            )}{" "}
            PKR
          </p>
        </div>
      </div>
      <div className=" flex justify-between items-center py-[18px]">
        <h5 className="text-dreamless  font-semibold">Total Price</h5>
        <p className="text-petsoCalbarese text-[24px]  font-semibold ">
          {cart?.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue?.price * currentValue?.quantity,
            0
          ) + 200}{" "}
          PKR
        </p>
      </div>
      <Button className="bg-[#2681C1] w-full rounded-md text-[#ffffff] mt-[24px] h-[48px] text-[16px] font-semibold">
        Proceed To Checkout
      </Button>
    </div>
  );
};

export default SummaryCard;
