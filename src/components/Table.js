import React from "react";
import Columns from "./Columns";

function Table({ headings, users}) {
    return (
      <div className="datatable mt-5">
        <table
          id="table"
          className="table table-striped table-hover table-condensed"
        >
          <thead>
            <tr>
              {headings.map(({ name, width }) => {
                return (
                  <th
                    className="col"
                    key={name}
                    style={{ width }}
                  >
                    {name}
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

