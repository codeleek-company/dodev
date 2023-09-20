import { Card, CardPar, CardTitle } from "@/components/card";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Temp() {
  return (
    <section>
      <div className="container grid gap-2 w-full grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] mt-10">
        {JSON.parse(localStorage.getItem("test1") as string).map(
          (e: { id: string; name: string }) => {
            console.log(e);
            return (
              <>
                <Card>
                  <CardTitle>{e.id}</CardTitle>
                  <CardPar>{e.name}</CardPar>
                </Card>
              </>
            );
          }
        )}
        <Dialog>
          <DialogTrigger
            id="new-idea"
            className="text-center rounded-md w-full border p-4 transition-colors hover:bg-muted/50"
          >
            <PlusCircle width={30} height={30} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Temp</DialogTitle>
              <DialogDescription>
                <Input id="idea-name" placeholder="Idea" className="my-3" />
                <Input id="idea-description" placeholder="Description" />
              </DialogDescription>
            </DialogHeader>
            <Button
              type="submit"
              id="submit-idea"
              onClick={() => alert("done")}
            >
              Confirm
            </Button>
            <DialogClose id="close-idea"></DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
