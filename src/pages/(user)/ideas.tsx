// import { Button } from "@/components/ui/button";
import { Idea, columns } from "@/components/ui/columns";
import { DataTable } from "@/components/ui/data-table";
import title from "@/utils/title";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line no-var, react-refresh/only-export-components
export var stater: Dispatch<SetStateAction<Idea[]>>;

// eslint-disable-next-line react-refresh/only-export-components
export function saveIdea(idea: Idea, backward = false, liveAdd = false) {
  let ideas: Idea[] = JSON.parse(localStorage.getItem("ideas") as string);

  backward
    ? (ideas = ideas.filter((e) => e.id !== idea.id))
    : ideas.push({
        id: idea.id,
        name: idea.name,
        description: idea.description,
      });

  localStorage.setItem("ideas", JSON.stringify(ideas));

  liveAdd ? stater(ideas) : "";

  return ideas;
}

export default function Ideas() {
  title("Ideas");

  const [data, setData] = useState([] as Idea[]);
  stater = setData;

  useEffect(() => {
    localStorage.getItem("ideas")
      ? setData(JSON.parse(localStorage.getItem("ideas") as string))
      : localStorage.setItem("ideas", JSON.stringify([]));
  }, []);

  return (
    <div className="container mx-auto py-10 relative">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
