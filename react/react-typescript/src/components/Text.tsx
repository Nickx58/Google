import React from "react";

type TextChildrenProps = {
  children: React.ReactNode;
};
export const TextChildren = ({ children }: TextChildrenProps) => {
  return <div>{children}</div>;
};
