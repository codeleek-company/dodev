export default function $(arg: string) {
  return document.querySelector(arg) as HTMLElement;
}
