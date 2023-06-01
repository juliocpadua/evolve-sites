import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BudgetPage } from "./Pages/Budget";
import { AboutUs } from "./Pages/AboutUs";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orçamento/:type" element={<BudgetPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
};
