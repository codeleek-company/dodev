import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { saveIdea } from "@/pages/(user)/ideas";
// import Sure from "../sure";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/utils/use-toast";
import { ToastAction } from "@/components/ui/toast";
// import $ from "@/utils/jquery";

export type Idea = {
  id: string;
  name: string;
  description: string;
};

export const columns: ColumnDef<Idea>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-translate-x-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Idea
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const idea = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 sm:absolute right-0 sm:-translate-x-[calc(100%_+_10px)] sm:-translate-y-[50%] w-8 p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Move to dev</DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            <DropdownMenuItem
              className="text-red-600 font-bold cursor-pointer"
              onClick={() => {
                saveIdea(idea, true, true);
                toast({
                  variant: "default",
                  title: "Undo!",
                  description: "Your last chance to go step back..",
                  action: (
                    <ToastAction
                      altText="Try again"
                      onClick={() => saveIdea(idea, false, true)}
                    >
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Delete Idea
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
