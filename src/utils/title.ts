import $ from "./jquery";

export default function title(newTitle: string) {
  $("title").innerHTML = `Dodev | ${newTitle}`;
}
