import { ReactNode } from "react";

export default function Feature({
  icon,
  desc,
  title,
}: {
  icon: ReactNode;
  desc: ReactNode;
  title: string;
}) {
  return (
    <div className="bg-background p-4 rounded-lg">
      <header className="rounded-full bg-[#aaa] w-fit m-auto p-3 mb-3">
        {icon}
      </header>
      <div>
        <h3>{title}</h3>
        <p className="dark:text-[#aaa] text-[#333]">{desc}</p>
      </div>
    </div>
  );
}
