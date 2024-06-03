import title from "@/utils/title";
import { Info } from "lucide-react";

export default function Projects() {
  title("Projects");

  return (
    <div className="mt-6 container mb-20">
      <section>
        <div className="bg-muted_diff rounded-t-md p-3 text-center">
          <Info />
        </div>
        <div className="bg-muted rounded-b-md p-3">
          <div className="mb-2">
            <span className="m-2">Project Name:</span>
            <span className="text-blue-200">...</span>
          </div>
          <div className="mb-2">
            <span className="m-2">Description:</span>
            <span className="text-blue-200">...</span>
          </div>
        </div>
      </section>
    </div>
  );
}
