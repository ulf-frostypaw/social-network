import React from "react";
import Head from "./Meta/Head";
interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
function Layout({ title, children }: LayoutProps) {
  return (
    <main>
      <Head title={title} children={undefined} />
      <main className="max-w-screen-lg w-full mx-auto p-4">{children}</main>
    </main>
  );
}

export default Layout;
