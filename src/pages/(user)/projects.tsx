import State from "@/components/state";
import title from "@/utils/title";
import { Info, PenBox } from "lucide-react";

export default function Projects() {
  title("Projects");

  return (
    <div className="mt-2 container mb-20">
      <section>
        <div className="bg-muted_diff rounded-t-md p-3 text-center">
          <Info />
        </div>
        <div className="bg-muted rounded-b-md p-3">
          <State isolate color={2}>
            project name
          </State>
          <span className="text-blue-200">A Name</span>
          <PenBox width={20} className="ms-1" />
        </div>
        <div></div>
      </section>
    </div>
  );
}
