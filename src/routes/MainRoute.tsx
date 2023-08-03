import React from "react";
import { Route, Routes } from 'react-router-dom';
import PurchaseOrder from "../pages/PurchaseOrder";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<PurchaseOrder />} />
    </Routes>
  );
};

export default MainRoute;
