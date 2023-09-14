import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useToast } from "@/utils/use-toast";

import { PlusCircledIcon } from "@radix-ui/react-icons";

// import

import { Input } from "@/components/ui/input";
import * as React from "react";

import { Button } from "@/components/ui/button";

import $ from "@/utils/jquery";

import { stater } from "@/pages/(user)/ideas";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { saveIdea } from "@/pages/(user)/ideas";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { toast } = useToast();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  function addIdea() {
    if (($("#idea-name") as HTMLInputElement).value) {
      const ideas = saveIdea({
        id: Math.floor(Math.random() * 1000000).toString(),
        name: ($("#idea-name") as HTMLInputElement).value,
        description: ($("#idea-description") as HTMLInputElement).value
          ? ($("#idea-description") as HTMLInputElement).value
          : "",
      });
      stater(ideas);
      $("#close-idea").click();
    } else {
      toast({
        variant: "destructive",
        title: "Fill out!",
        description:
          "Idea name field is required. Please fill out the missing fields...",
      });
    }
  }

  window.onkeyup = function (e: KeyboardEvent) {
    // console.log(e.keyCode);
    e.keyCode == 187 && e.shiftKey == true && e.target == document.body
      ? $("#new-idea").click()
      : "";

    if (
      (e.target == $("#idea-name") || e.target == $("#idea-description")) &&
      e.keyCode == 13
    ) {
      $("#submit-idea").click();
    }
  };

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-t-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Dialog>
        <DialogTrigger
          id="new-idea"
          className="border-t-0 text-center rounded-b-lg w-full border p-4 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
        >
          {/* New idea */}
          <PlusCircledIcon width={30} height={30} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Idea</DialogTitle>
            <DialogDescription>
              <Input id="idea-name" placeholder="Idea" className="my-3" />
              <Input id="idea-description" placeholder="Description" />
            </DialogDescription>
          </DialogHeader>
          <Button type="submit" id="submit-idea" onClick={addIdea}>
            Confirm
          </Button>
          <DialogClose id="close-idea"></DialogClose>
        </DialogContent>
      </Dialog>
      <div className="flex justify-between items-center">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
