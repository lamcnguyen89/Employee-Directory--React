import React from "react";
import Columns from "./Columns";

function Table({headings, users}) {
    return (
      <div className="datatable mt-5">
        <table
          id="table"
          className="table table-striped table-hover table-condensed"
        >
          <thead>
            <tr>
              {headings.map(({ columnName, columnWidth }) => {
                return (
                  <th
                    className="col"
                    key={columnName}
                    style={{ columnWidth }}
                  >
                    {columnName}
                    <span className="pointer"></span>
                  </th>
                );
              })}
            </tr>
          </thead>
  
          <Columns users={users} />
        </table>
      </div>
    );
  }
  
  export default Table;

