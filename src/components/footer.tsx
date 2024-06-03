import { Copyright, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-bar">
      <div className="container p-3">
        <div className="flex justify-evenly uppercase mt-2">
          <Link to="/dashboard/projects">Projects</Link>
          <Link to="/dashboard/ideas">Ideas</Link>
          <Link to="/dashboard/resources">Resources</Link>
          <Link to="/dashboard/roadmap">Roadmap</Link>
        </div>
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
