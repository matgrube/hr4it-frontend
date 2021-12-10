import React from "react";
import type { LayoutProps } from "../Interface";
import { Header } from "../../components/Header";

export const DashboardLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className="dashboardLayout">
      <div className="headerContainer">
        <Header hasBackButton={true} />        
      </div>
      <div className="contentField">
        { children }
      </div>
    </div>
  )
}
