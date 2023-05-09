import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BudgetPage } from "./Pages/Budget";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orçamento/:type" element={<BudgetPage />} />
    </Routes>
  );
};
