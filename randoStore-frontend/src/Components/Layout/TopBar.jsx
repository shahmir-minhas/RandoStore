import { Link } from "react-router-dom";
import { Badge, Input } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { useCart, useSearch } from "../../Store/store";
import { useEffect, useState } from "react";

const TopBar = () => {
  const { cart } = useCart();
  const { search, setSearch } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");

  //=====================================
  //            Debounse for search
  //=====================================
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(searchTerm);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <nav className="flex justify-between px-[20px] items-center h-[80px] border-b border-[#E6E6E6]">
      <Input
        suffix={<SearchOutlined />}
        placeholder="Search for item"
        className="primary-input bg-[#F9F9F9] w-[380px] h-[40px]"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      <div className="flex items-center gap-[14px]">
        <CustomerServiceOutlined
          className="cursor-pointer"
          style={{ fontSize: "26px" }}
        />
        <HeartOutlined
          className="cursor-pointer"
          style={{ fontSize: "26px" }}
        />
        <Badge count={cart.length}>
          <Link to={"/cart"}>
            <ShoppingCartOutlined
              className="cursor-pointer"
              style={{ fontSize: "26px" }}
            />
          </Link>
        </Badge>
        <UserOutlined className="cursor-pointer" style={{ fontSize: "26px" }} />
      </div>
    </nav>
  );
};

export default TopBar;
