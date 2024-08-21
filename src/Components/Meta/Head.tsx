import React from "react";
import { Helmet } from "react-helmet-async";
interface HeadProps {
  title: string;
  children: React.ReactNode;
}
function Head({ title, children }: HeadProps) {
  return (
    <Helmet>
      <title>
        {title} / {import.meta.env.VITE_APP_NAME}
      </title>
      {children}
    </Helmet>
  );
}

export default Head;
