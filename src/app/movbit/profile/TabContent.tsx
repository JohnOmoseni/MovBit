import React from "react";

type Props = {
  title: string;
};

export default function TabContent({ title }: Props) {
  return <div>{title}</div>;
}
