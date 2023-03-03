import React from "react";

export default function Header ({
  text,
  children,
}: {
  text?: string;
  children: React.ReactNode;
}) {
  return <h1>{text ?? children}</h1>;
};