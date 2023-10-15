import { Outlet } from "react-router-dom";

import Navbar from "../Components/Layout/Navbar";
import TopBar from "../Components/Layout/TopBar";

const Layout = () => {
  return (
    <section className="h-[100vh] w-[100%] grid grid-cols-[200px_auto]">
      <Navbar />
      <main className="bg-[#FBFBFB]">
        <TopBar />
        <div className="p-[20px]">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Layout;
