import { Card } from "@/components/card";
import { PlusCircle } from "lucide-react";

export default function Temp() {
  return (
    <section>
      <div className="container grid gap-2 w-full grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] mt-10">
        {JSON.parse(localStorage.getItem("test1") as string).map(
          (e: { id: string; name: string }) => {
            console.log(e);
            return (
              <>
                <h1>{e.id}</h1>
                <h1>{e.name}</h1>
              </>
            );
          }
        )}
        <Card className="flex justify-center cursor-pointer items-center h-[100px]">
          <PlusCircle />
        </Card>
      </div>
    </section>
  );
}
