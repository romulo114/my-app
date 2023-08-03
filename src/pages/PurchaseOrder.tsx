import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PurchaseOrderForm from "../components/PurchaseOrderForm";

const PurchaseOrder = () => {
  
  return (
    <MainLayout>
      <PurchaseOrderForm />
    </MainLayout>
  );
};

export default PurchaseOrder;
