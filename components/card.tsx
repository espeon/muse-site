import clsx from "clsx";
import React from "react";

const Card = ({ children, className = "", ...props } : any) => {
  let colors = "bg-neutral-200/75 dark:bg-neutral-900/55"
  return (
    <div
      className={clsx(
        "flex overflow-hidden flex-col rounded-xl border shadow-lg",
        "p-4 transition-all duration-300 dark:border-neutral-700/75 border-neutral-200/75 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className=" p-6 rounded-lg flex hover:shadow-none shadow-none border-0 flex-col items-center justify-center text-center">
      <div className="bg-gray-500/30 p-3 rounded-full mb-4">{icon}</div>
      <h3 className="text-sm font-medium">{title}</h3>
    </Card>
  )
}

export default Card;