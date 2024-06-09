import React from "react";
import Provider from "./provider";
import Footer from "@/components/movbit/Footer";

export default function MovbitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      {children}
      <Footer />
    </Provider>
  );
}
