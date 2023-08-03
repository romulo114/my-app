import React, { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="App">{children}</div>;
};

export default MainLayout;
