import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Story({
  title,
  logo,
  par,
  link,
}: {
  title: string;
  logo: ReactNode;
  par: string;
  link: string;
}) {
  return (
    <Link
      className="bg-muted p-3 block rounded-md w-fit hover:opacity-90 transition-all duration-300"
      to={link}
    >
      {/* Header */}
      <div className="h-[200px] flex justify-center items-center max-w-[300px]">
        {logo}
      </div>
      <div>
        <h3 className="border-b-2 uppercase mb-2 border-[#666]">{title}</h3>
        <p className="w-[300px] dark:text-[#aaa] text-[#333] uppercase">
          {par}
        </p>
      </div>
    </Link>
  );
}
