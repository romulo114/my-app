import React, { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full max-w-xs mx-auto my-[100px]">
      {children}
      <p className="text-center text-gray-500 text-xs mt-10">
        &copy;2023. All rights reserved.
      </p>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
