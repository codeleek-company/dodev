import title from "@/utils/title";
import Story from "@/components/story";
import { LayoutDashboard, Lightbulb, Link, Map } from "lucide-react";

export default function Dashboard() {
  title("Dashboard");

  return (
    <div className="container my-10 mb-20 grid gap-3 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] justify-center">
      <Story
        par="Note now your ideas. Maybe moving them to developement later on..."
        link="/dashboard/ideas"
        title="Ideas"
        logo={<Lightbulb />}
      />
      <Story
        par="A huge project should have an outline of features, issues, and design, etc..."
        title="Projects"
        link="/dashboard/projects"
        logo={<LayoutDashboard />}
      />
      <Story
        par="A fast way to reach your goal by setting up checkpoints"
        title="roadmap"
        link="/dashboard/roadmap"
        logo={<Map />}
      />
      <Story
        par="Saving up the resources (links, videos, snippets) is always a good way for later use"
        title="resources"
        link="/dashboard/resources"
        logo={<Link />}
      />
    </div>
  );
}
