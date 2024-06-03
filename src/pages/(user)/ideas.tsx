"use client";

import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
import title from "@/utils/title";
import { ArrowRightCircle } from "lucide-react";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Idea = {
  name: string;
  tags: string[];
};

// eslint-disable-next-line no-var, react-refresh/only-export-components
export var stater: Dispatch<SetStateAction<Idea[]>>;

// ================================================ Idea actions ================================================ \\
function backspaceOrEnter(
  index: number,
  e: Event | undefined,
  state: typeof stater
) {
  if (
    (e as KeyboardEvent).key == "Backspace" &&
    (e?.target as HTMLElement).innerHTML == ""
  )
    deleteIdea(index, state);
  if ((e as KeyboardEvent).key == "Enter") {
    e?.preventDefault();
    // createIdea(state);
  }
}

function update(index: number, e: Event | undefined) {
  const ideas = JSON.parse(localStorage.getItem("ideas") as string);
  ideas[index].name = (e?.target as HTMLParagraphElement).innerHTML;
  localStorage.setItem("ideas", JSON.stringify(ideas));
}

function deleteIdea(index: number, state: typeof stater) {
  let ideas = JSON.parse(localStorage.getItem("ideas") as string);
  ideas = ideas.filter((idea: Idea) => idea != ideas[index]);
  state(ideas);
  localStorage.setItem("ideas", JSON.stringify(ideas));
  console.log(index);
}

const newIdea = { name: "Idea ✨", tags: [] };
function createIdea(state: typeof stater) {
  const newData = [
    ...JSON.parse(localStorage.getItem("ideas") as string),
    newIdea,
  ];
  state(newData);
  localStorage.setItem("ideas", JSON.stringify(newData));
}

// function createProject() {}

function moveToDevelopment() {}

const defaultIdea = [{ name: "Get started", tags: ["new"] }];

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
                  onKeyDown={() => backspaceOrEnter(index, event, stater)}
                  className="focus:outline-0 max-w-sm"
                  contentEditable={true}
                  suppressContentEditableWarning={false}
                >
                  {idea.name}
                </p>
                <div className="flex gap-2">
                  {idea.tags.map((tag) => {
                    return <span>{tag}</span>;
                  })}
                </div>
              </div>
              <ArrowRightCircle
                className="cursor-pointer"
                onClick={moveToDevelopment}
              />
            </div>
            <hr />
          </>
        );
      })}
      <div className="my-2">
        <Button onClick={() => createIdea(setData)}>Add new...</Button>
      </div>
    </div>
  );
}
