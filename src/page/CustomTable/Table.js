// Table.js

import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

export default function Table({ columns, data }) {
      // Use the useTable Hook to send the columns and data to build the table
      const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            setFilter, // The useFilter Hook provides a way to set the filter
      } = useTable(
            {
                  columns,
                  data,
            },
            useFilters,
            useSortBy // Adding the useFilters Hook to the table
            // You can add as many Hooks as you want. Check the documentation for details. You can even add custom Hooks for react-table here
      );

      const [filterInput, setFilterInput] = useState("");

      // Update the state when input changes
      const handleFilterChange = (e) => {
            const value = e.target.value || "";
            setFilter("show.name", value);
            setFilterInput(value);
      };
      return (
            <>
                  <input
                        value={filterInput}
                        onChange={handleFilterChange}
                        placeholder={"Search name"}
                  />
                  <table {...getTableProps()}>
                        <thead>
                              {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                          {headerGroup.headers.map((column) => (
                                                <th
                                                      {...column.getHeaderProps(
                                                            column.getSortByToggleProps()
                                                      )}
                                                      className={
                                                            column.isSorted
                                                                  ? column.isSortedDesc
                                                                        ? "sort-desc"
                                                                        : "sort-asc"
                                                                  : ""
                                                      }
                                                >
                                                      {column.render("Header")}
                                                </th>
                                          ))}
                                    </tr>
                              ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                              {rows.map((row, i) => {
                                    prepareRow(row);
                                    return (
                                          <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                      return (
                                                            <td
                                                                  {...cell.getCellProps()}
                                                            >
                                                                  {cell.render(
                                                                        "Cell"
                                                                  )}
                                                            </td>
                                                      );
                                                })}
                                          </tr>
                                    );
                              })}
                        </tbody>
                  </table>
            </>
      );
}
