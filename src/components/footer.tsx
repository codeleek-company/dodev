import { Copyright, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-bar">
      <div className="container p-3">
        <div className="border-t-2 mt-5 pt-2 flex justify-between flex-wrap">
          <span className="dark:text-[#999] text-[#333] text-lg">
            Copyrights <Copyright /> Osama Mohammed
          </span>
          {/* Links */}
          <div className="flex gap-2">
            <Twitter />
            <Youtube />
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
}
