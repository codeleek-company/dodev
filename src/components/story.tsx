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
      className="bg-muted p-3 block rounded-md w-fit dark:hover:opacity-90 hover:opacity-70 transition-all duration-300"
      to={link}
    >
      {/* Header */}
      <div className="h-[200px] flex justify-center items-center ">{logo}</div>
      <div>
        <h3 className="border-b-2 uppercase mb-2 border-[#666]">{title}</h3>
        <p className="min-w-[300px] text-diff uppercase">{par}</p>
      </div>
    </Link>
  );
}
