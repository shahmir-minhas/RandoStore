import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Index from "../Pages/Index";
import Cart from "../Pages/Cart";
import Items from "../Pages/Items/Items";
import ItemForm from "../Pages/Items/ItemCreateForm";
import ItemDetails from "../Pages/Items/ItemDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/form" element={<ItemForm />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
