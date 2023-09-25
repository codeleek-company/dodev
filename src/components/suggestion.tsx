import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

type Suggestion = {
  state: "feature" | "issue";
  title: string;
  desc: string;
  upCount: number;
  downCount: number;
};

export default function Suggestion({
  state,
  title,
  desc,
}: // upCount,
// downCount,
Suggestion) {
  const [count, setCount] = useState(0);

  function downSuggestion(this: unknown) {
    setCount(count - 1);
  }

  function upSuggestion() {
    setCount(count + 1);
  }

  return (
    <div className="rounded-lg p-3 mb-2 bg-muted">
      <h3 className="my-2 mb-5">
        <span
          className={`${
            state == "feature" ? "bg-gold" : "bg-red-600"
          } px-4 rounded-l-full uppercase ${
            state == "feature" ? "text-gold-foreground" : "text-white"
          }`}
        >
          {state}
        </span>
        <span className="bg-muted_diff px-4 rounded-r-full uppercase">
          {title}
        </span>
      </h3>
      <p>{desc}</p>
      <footer>
        <span
          id="up"
          className="bg-muted_diff mt-2 p-2 px-5 inline-block cursor-pointer rounded-lg"
        >
          {count}
        </span>
        <span
          onClick={upSuggestion}
          id="down"
          className="bg-muted_diff mt-2 p-1 inline-block ms-2 cursor-pointer rounded-l-lg px-2"
        >
          <ArrowUp />
        </span>
        <span
          onClick={downSuggestion}
          id="down"
          className="bg-muted_diff mt-2 inline-block p-1 cursor-pointer rounded-r-lg px-2"
        >
          <ArrowDown />
        </span>
      </footer>
    </div>
  );
}
