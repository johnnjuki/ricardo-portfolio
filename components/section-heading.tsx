import React from "react";

interface SectionHeadingProps {
  title: React.ReactNode;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="mb-8 text-3xl text-center font-medium capitalize dark:bg-opacity-20">{title}</h2>;
}
