import { Image } from "antd";
import useApiHook from "../../Hooks/useApiHok";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ItemDetails = () => {
  const { id } = useParams();
  const { data, loading } = useApiHook({ method: "get", url: `/items/${id}` });
  console.log(data);
  return (
    <section>
      <Link to={"/items"} className="flex items-center gap-2 w-fit">
        <ArrowLeftOutlined />
        <h2 className="text-[18px] font-semibold ">Back</h2>
      </Link>
      <div className="rounded-md bg-[#ffffff] mt-[20px] p-[20px]">
        <h2 className="text-[21px] font-semibold mb-[20px]">Item Details</h2>
        <div className="flex gap-[16px]">
          <div className="rounded w-[200px] h-[200px] border ">
            <Image src={data?.img} width={200} />
          </div>
        </div>
        <div className="pt-[20px] flex flex-col gap-[16px]">
          <h2 className="text-[28px] font-semibold">{data?.name}</h2>
          <h2 className="text-[16px] ">
            ID: <strong>{data?.id}</strong>{" "}
          </h2>
        </div>
        <div className="mt-[20px]">
          <p className="text-[16px] mb-[10px]">
            Price: <strong>{data?.price}</strong>
          </p>
          <p className="text-[16px] ">
            Img url: <strong>{data?.img}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
