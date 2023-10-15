import { Button, Form, Input, message } from "antd";
import { ValidationRules } from "../../Utils/ValidationRules";
import { Link, useNavigate } from "react-router-dom";
import useApiHook from "../../Hooks/useApiHok";
import { useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ItemForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { makeRequest, data, loading } = useApiHook({}, false);

  //==============================
  //   Form Fields
  //==============================
  const fields = [
    {
      name: "name",
      rules: [ValidationRules.required],
      label: "Name",
    },
    {
      name: "price",
      rules: [ValidationRules.required, ValidationRules.number],
      label: "Price",
    },
    {
      name: "img",
      rules: [ValidationRules.required, ValidationRules.website],
      label: "Image url",
    },
  ];

  //==============================
  //   Handlers
  //==============================
  const submit = async (values) => {
    makeRequest({ method: "post", data: values, url: "/items" })
      .then((e) => {
        message.success("Item created successfully!");
        handleCancel();
      })
      .catch((err) => {
        console.log(err);
        message.error("An error occured while creating an item!");
      });
  };

  const handleCancel = () => {
    form.resetFields();
    navigate("/items");
  };

  return (
    <section>
      <Link to={"/items"} className="flex items-center gap-2 w-fit">
        <ArrowLeftOutlined />
        <h2 className="text-[18px] font-semibold ">Back</h2>
      </Link>

      <div className="rounded-md bg-[#ffffff] mt-[20px] p-[20px]">
        <h2 className="text-[18px] mb-[20px] font-semibold">
          Create new Item
        </h2>
        <Form onFinish={submit} layout="vertical" form={form}>
          <div className="grid grid-cols-2 gap-4">
            {fields.map((field) => (
              <Form.Item
                name={field.name}
                label={field.label}
                rules={field.rules}
                key={field.name}
              >
                <Input className="h-[40px] bg-[#fbfbfb]" />
              </Form.Item>
            ))}
          </div>
          <div className="flex justify-end gap-[10px] ">
            <Button
              className="border-[#2681C1] text-[#2681C1] font-semibold h-[40px] "
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="bg-[#2681C1] text-[#ffffff] font-semibold h-[40px] "
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ItemForm;
