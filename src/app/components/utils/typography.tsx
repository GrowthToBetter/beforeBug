import React from "react";

interface textProps {
  children: string | React.ReactNode;
  className: string;
}

export function H1({ children, className }: textProps) {
  return (
    <h1 className={`xl:text-5xl text-3xl  font-bold ${className}`}>
      {children}
    </h1>
  );
}
export function H2({ children, className }: textProps) {
  return (
    <h2 className={`xl:text-4xl text-2xl font-bold ${className}`}>
      {children}
    </h2>
  );
}
export function H3({ children, className }: textProps) {
  return (
    <h2 className={`xl:text-3xl text-xl font-bold ${className}`}>{children}</h2>
  );
}
export function H4({ children, className }: textProps) {
  return (
    <h2 className={`xl:text-2xl text-lg font-bold ${className}`}>{children}</h2>
  );
}
export function H5({ children, className }: textProps) {
  return (
    <h2 className={`xl:text-xl text-base font-bold ${className}`}>
      {children}
    </h2>
  );
}
export function H6({ children, className }: textProps) {
  return (
    <h2 className={`xl:text-lg text-sm font-bold ${className}`}>{children}</h2>
  );
}
export function XLargeParagraph({ children, className }: textProps) {
  return (
    <p className={`xl:text-xl text-lg font-normal ${className}`}>{children}</p>
  );
}
export function LargeParagraph({ children, className }: textProps) {
  return <p className={`text-lg font-normal ${className}`}>{children}</p>;
}
export function Paragraph({ children, className }: textProps) {
  return <p className={`text-base font-normal ${className}`}>{children}</p>;
}
export function SmallParagraph({ children, className }: textProps) {
  return <p className={`text-sm font-normal ${className}`}>{children}</p>;
}
export function XSmallParagraph({ children, className }: textProps) {
  return <p className={`text-xs font-normal ${className}`}>{children}</p>;
}
