import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const TestGrid = () => {

    const [columnDefs, setColumnDefs] = useState([
        { field: "id", sortable: true, filter: true },
        { field: "operation", sortable: true, filter: true },
        { field: "scope", sortable: true, filter: true },
        { field: "timestamp", sortable: true, filter: true },
        { field: "status", sortable: true, filter: true },
      ]);
    
      const [rowData, setRowData] = useState([
          {"id":1,"operation":1633,"scope":"C","timestamp":"2021-10-16T16:42:31Z","status":"Interrupted"},
          {"id":2,"operation":1634,"scope":"A/B/C","timestamp":"2022-04-05T18:19:59Z","status":"Finished"},
          {"id":3,"operation":1635,"scope":"C","timestamp":"2021-11-07T04:38:21Z","status":"Interrupted"},
          {"id":4,"operation":1636,"scope":"C","timestamp":"2022-04-24T11:39:55Z","status":"Failed"},
          {"id":5,"operation":1637,"scope":"A","timestamp":"2022-04-03T05:08:58Z","status":"Interrupted"},
          {"id":6,"operation":1638,"scope":"A","timestamp":"2022-04-20T19:57:51Z","status":"Finished"},
          {"id":7,"operation":1639,"scope":"A/B/C","timestamp":"2022-01-10T09:25:52Z","status":"Interrupted"},
          {"id":8,"operation":1640,"scope":"C","timestamp":"2022-02-20T03:32:28Z","status":"Interrupted"},
          {"id":9,"operation":1641,"scope":"A/B","timestamp":"2022-02-09T14:39:10Z","status":"Interrupted"},
          {"id":10,"operation":1642,"scope":"B","timestamp":"2021-11-07T05:37:54Z","status":"Interrupted"},
          {"id":11,"operation":1643,"scope":"C","timestamp":"2021-07-03T01:38:54Z","status":"Finished"}
      ]);
        return (
            <div className="ag-theme-alpine" style={{ height: 600, width: 1000 }}>
                <h1>Humina humina humina</h1>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection='multiple'
              animateRows={true}
            />
          </div>
          )
}
