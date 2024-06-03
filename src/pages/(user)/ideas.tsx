"use client";

import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
import title from "@/utils/title";
import { X } from "lucide-react";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Idea = {
  name: string;
  tags: string[];
};

// eslint-disable-next-line no-var, react-refresh/only-export-components
export var stater: Dispatch<SetStateAction<Idea[]>>;

function update(index: number, e: Event | undefined) {
  const ideas = JSON.parse(localStorage.getItem("ideas") as string);
  ideas[index].name = (e?.target as HTMLParagraphElement).innerHTML;
  localStorage.setItem("ideas", JSON.stringify(ideas));
}

function deleteIdea(index: number, d) {
  let ideas = JSON.parse(localStorage.getItem("ideas") as string);
  ideas = ideas.filter((idea: Idea) => idea != ideas[index]);
  d(ideas);
  localStorage.setItem("ideas", JSON.stringify(ideas));
  console.log(index);
}

const defaultIdea = [{ name: "Get started", tags: ["new"] }];
const newIdea = { name: "Idea ✨", tags: [] };

export default function Ideas() {
  title("Ideas");

  const [data, setData] = useState([] as Idea[]);
  stater = setData;

  useEffect(() => {
    const localStorageIdeas = localStorage.getItem("ideas");
    if (localStorageIdeas && JSON.parse(localStorageIdeas))
      setData(JSON.parse(localStorageIdeas));
    else
      localStorage.setItem("ideas", JSON.stringify(defaultIdea)),
        setData(defaultIdea);
  }, []);

  return (
    <div className="container section mx-auto py-10 relative">
      <div className="flex justify-between mb-2">
        <span>Name</span>
        <span>Tags</span>
      </div>
      <hr />
      {data.map((idea, index) => {
        return (
          <>
            <div className="flex items-center justify-between">
              <div className="my-2 inline-flex justify-between">
                <p
                  onKeyUp={() => update(index, event)}
                  className="focus:outline-0"
                  contentEditable={true}
                  suppressContentEditableWarning={false}
                >
                  {idea.name || "..."}
                </p>
                <div className="flex gap-2">
                  {idea.tags.map((tag) => {
                    return <span>{tag}</span>;
                  })}
                </div>
              </div>
              <X
                onClick={() => deleteIdea(index, setData)}
                className="ms-4 cursor-pointer"
                color="#955"
              />
            </div>
            <hr />
          </>
        );
      })}
      <div className="my-2">
        <Button
          onClick={() => {
            const newData = [
              ...JSON.parse(localStorage.getItem("ideas") as string),
              newIdea,
            ];
            setData(newData);
            localStorage.setItem("ideas", JSON.stringify(newData));
          }}
        >
          Add new...
        </Button>
      </div>
    </div>
  );
}
