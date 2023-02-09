import React from "react";
import Sidebar from "@/components/dashboards/notificationCenter/sidebar";
import TopBar from "@/components/dashboards/notificationCenter/topBar";
import NotificationBody from "@/components/dashboards/notificationCenter/notificationBody";
const Report = (): JSX.Element => {
    return (
        <div className="flex">
          <Sidebar />
          <div className="block text-[0.80rem] w-[96%]">
          <TopBar />
          <NotificationBody />
          </div>
        </div>
    )

}
export default Report;