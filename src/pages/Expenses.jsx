import React from "react";
import { useState } from "react";
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";

const Expenses = () => {
  const [sorting,setSorting] = useState([])
  const [rowSelection, setRowSelection] = useState({});
  // Dummy data

  const data = React.useMemo(
    () => [
      {
        subject: "Flight to NYC",
        merchant: "Delta Airlines",
        date: "2025-01-15",
        total: 450.75,
        currency: "USD",
        category: "Travel",
        description: "Round-trip flight to NYC for a meeting.",
        reimburseable: true,
        report: "Client Meetings",
      },
      {
        subject: "Office Supplies",
        merchant: "Staples",
        date: "2025-01-10",
        total: 78.2,
        currency: "USD",
        category: "Office Expenses",
        description: "Pens, notebooks, and printer ink.",
        reimburseable: false,
        report: "Office Supplies",
      },
    ],
    []
  );

  // Table column definitions
  const columns = React.useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            // Select/Deselect All Rows
            checked={table.getIsAllRowsSelected()}
            onChange={(e) => table.toggleAllRowsSelected(e.target.checked)}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            // Row Checkbox
            checked={row.getIsSelected()}
            onChange={(e) => row.toggleSelected(e.target.checked)}
          />
        ),
        size:10,
      },
      { accessorKey: "subject", header: "Subject" },
      { accessorKey: "merchant", header: "Merchant" },
      { accessorKey: "date", header: "Date" },
      { accessorKey: "total", header: "Total" },
      { accessorKey: "currency", header: "Currency" },
      { accessorKey: "category", header: "Category" },
      { accessorKey: "description", header: "Description" },
      { accessorKey: "reimburseable", header: "Reimburseable" },
      { accessorKey: "report", header: "Report" },
    ],
    []
  );

  // Create table instance
  const table = useReactTable({
    data,
    columns,
    state:{
      sorting,
      rowSelection
    },
    onRowSelectionChange:setRowSelection,
    onSortingChange:setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel:getSortedRowModel(),

  });

  return (
    <>
    <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              className="text-white"
              key={header.id}
              onClick={header.column.getToggleSortingHandler()} // Add sorting handler
              style={{
                cursor: header.column.getCanSort() ? "pointer" : "default",
              }}
            >
              {flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
              {{
                asc: " 🔼",
                desc: " 🔽",
              }[header.column.getIsSorted()] ?? null}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="text-white">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  {/* <div style={{ marginTop: "16px" }}>
  <h4>Selected Rows:</h4>
  <pre className="text-white"> {JSON.stringify(rowSelection, null, 2)}</pre>

  <h4>Sorting State:</h4>
  <pre className="text-white">{JSON.stringify(sorting, null, 2)}</pre>
</div> */}
    </>
  );
};

export default Expenses;
