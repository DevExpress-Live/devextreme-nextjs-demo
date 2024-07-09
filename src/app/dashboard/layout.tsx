"use client";
import React, { FC, useMemo } from "react";
import { signOut } from "next-auth/react";
import { Toolbar } from "devextreme-react/toolbar";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const logout = async () => {
  await signOut();
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const router = useRouter();

  const toolbarItems = useMemo(
    () => [
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "home",
          stylingMode: "text",
          text: "Home",
          onClick: () => router.push("/dashboard"),
        },
      },
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "user",
          stylingMode: "text",
          text: "Profile",
          onClick: () => router.push("/dashboard/profile"),
        },
      },
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "money",
          stylingMode: "text",
          text: "Sales",
          onClick: () => router.push("/dashboard/sales"),
        },
      },
      {
        widget: "dxButton",
        location: "after",
        options: {
          icon: "user",
          stylingMode: "text",
          text: "Logout ",
          onClick: () => logout(),
        },
      },
    ],
    [router],
  );

  return (
    <div className="dashboard-layout">
      <Toolbar items={toolbarItems} className="shadow-md" />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
