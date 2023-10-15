import {
  HomeTwoTone,
  DatabaseTwoTone,
  ShoppingTwoTone,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { Image } from "antd";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    {
      path: "/",
      title: "Home",
      icon: <HomeTwoTone />,
      key: "",
    },
    {
      path: "/items",
      title: "Items",
      icon: <DatabaseTwoTone />,
      key: "items",
    },
    {
      path: "/cart",
      title: "Cart",
      icon: <ShoppingTwoTone />,
      key: "cart",
    },
  ];
  return (
    <nav className="flex flex-col gap-10 p-[26px_13px] border-[#E6E6E6] border">
      <div className="flex self-center">
        <img src={logo} width={100} />
      </div>
      <ul className="flex gap-5 flex-col">
        {navLinks.map((el) => (
          <li
            key={el.title}
            className={`p-[5px_20px] text-[#728694] text-[16px]  ${
              window.location.pathname.split("/")[1] === el.key &&
              "bg-[#2681C1] rounded-md  text-[#ffffff]"
            } `}
          >
            <Link to={el.path} className={`flex gap-3`}>
              {el.icon}
              <span>{el.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
