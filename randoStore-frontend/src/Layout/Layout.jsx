import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="grid grid-cols-[250px_auto]">
      <nav></nav>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
