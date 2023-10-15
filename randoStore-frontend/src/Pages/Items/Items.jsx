import { Button, Table, message } from "antd";
import useApiHook from "../../Hooks/useApiHok";
import { DeleteTwoTone, PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Items = () => {
  const navigate = useNavigate();
  const {
    data,
    loading,
    makeRequest: refetch,
  } = useApiHook({ method: "get", url: "/items/" });
  const { makeRequest, loading: deleteLoading } = useApiHook({}, false);

  const handleDelete = (id) => {
    makeRequest({ method: "DELETE", url: `/items/${id}` })
      .then((res) => {
        message.success("Item deleted successfully!");
        refetch();
      })
      .catch((err) => message.error("An error occoured while deleting item!"));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Link to={`/items/${id}`}>
          <u>{id}</u>
        </Link>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <DeleteTwoTone
          className="text-[20px] cursor-pointer "
          onClick={() => handleDelete(id)}
        />
      ),
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-[21px] font-semibold">Items</h2>
        <Button
          className="bg-[#2681C1] text-[#ffffff] font-semibold h-[40px]"
          icon={<PlusOutlined />}
          onClick={() => navigate("/items/form")}
        >
          Add new Item
        </Button>
      </div>
      <div className="rounded-md bg-[#ffffff] mt-[20px] p-[20px]">
        <h2 className="text-[18px] font-semibold mb-[10px]">
          Total ({data?.length})
        </h2>
        <Table
          dataSource={data ?? []}
          columns={columns}
          loading={loading || deleteLoading}
        />
      </div>
    </section>
  );
};

export default Items;
