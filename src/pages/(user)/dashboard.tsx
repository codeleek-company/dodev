import { buttonVariants } from "@/utils/variants";
import title from "@/utils/title";

export default function Dashboard() {
  title("Dashboard");

  return (
    <div className="flex gap-2 justify-center items-center h-screen">
      <a
        className={buttonVariants({ variant: "outline" })}
        href="/dashboard/projects"
      >
        Projects
      </a>
      <a
        className={buttonVariants({ variant: "outline" })}
        href="/dashboard/ideas"
      >
        Ideas
      </a>
      <a
        className={buttonVariants({ variant: "outline" })}
        href="/dashboard/resources"
      >
        Resources
      </a>
      <a
        className={buttonVariants({ variant: "outline" })}
        href="/dashboard/roadmap"
      >
        Roadmap
      </a>
    </div>
  );
}
