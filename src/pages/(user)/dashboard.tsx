import { buttonVariants } from "@/utils/variants";
import title from "@/utils/title";
import { Link } from "react-router-dom";

export default function Dashboard() {
  title("Dashboard");

  return (
    <div className="flex gap-2 justify-center items-center h-screen">
      <Link
        className={buttonVariants({ variant: "outline" })}
        to="/dashboard/projects"
      >
        Projects
      </Link>
      <Link
        className={buttonVariants({ variant: "outline" })}
        to="/dashboard/ideas"
      >
        Ideas
      </Link>
      <Link
        className={buttonVariants({ variant: "outline" })}
        to="/dashboard/resources"
      >
        Resources
      </Link>
      <Link
        className={buttonVariants({ variant: "outline" })}
        to="/dashboard/roadmap"
      >
        Roadmap
      </Link>
    </div>
  );
}
