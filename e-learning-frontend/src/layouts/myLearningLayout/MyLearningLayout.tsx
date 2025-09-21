import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

export default function MyLearningLayout() {
    const [collapsed, setCollapsed] = useState<boolean>( false);

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className={`flex-1 p-6 overflow-y-auto w-full border ${collapsed ? "ml-16" : "ml-64"} transition-all duration-300`}>
        <Outlet />
      </main>
    </div>
  );
}
