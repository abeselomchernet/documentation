import React from "react";

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`bg-gray-800 rounded-lg shadow p-6 ${className ?? ''}`}>{children}</div>;
}

export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`mb-4 border-b pb-2 ${className ?? ''}`}>{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={className}>{children}</div>;
}
