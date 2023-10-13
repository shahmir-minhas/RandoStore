import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>home</h1>} />
          <Route path="/item/:id" element={<h1>item by id</h1>} />
          <Route path="/cart" element={<h1>cart</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
