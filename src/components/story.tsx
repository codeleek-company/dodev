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
      className="bg-muted block rounded-md w-fit hover:-translate-y-1 transition-all duration-300"
      to={link}
    >
      {/* Header */}
      <div className="h-[200px] rounded-t-md flex justify-center items-center bg-muted_diff">
        {logo}
      </div>
      <div className="p-3">
        <h3 className="border-b-2 uppercase mb-2 border-[#666]">{title}</h3>
        <p className="min-w-[300px] text-diff uppercase">{par}</p>
      </div>
    </Link>
  );
}
