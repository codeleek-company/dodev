import title from "@/utils/title";

export default function Error() {
  title("Not found");

  return (
    <div className="flex justify-center items-center text-4xl flex-col gap-4 h-[80vh]">
      404 | NOT FOUND
    </div>
  );
}
