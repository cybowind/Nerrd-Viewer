import React, { useEffect } from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from 'react-redux'
import { fetchOperations } from './operationSlice'

export const OperationView = () => {

    const dispatch = useDispatch()
    const data2 = useSelector((state) => state.operation.operations);
    const editable = data2.map(o => ({ ...o }));

    useEffect(() => {
      dispatch(fetchOperations())
    }, [])
  
    return(
        <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <MaterialTable
          columns={[
            {
              title: "ID",
              field: "id",
              headerStyle: {
                backgroundColor: "#cc4422"
              }
            },
            {
              title: "Operation",
              field: "operation",
              headerStyle: {
                backgroundColor: "#cc4422"
              }
            },
            {
              title: "Scope",
              field: "scope",
              headerStyle: {
                backgroundColor: "#cc4422"
              }
            },
            {
              title: "Timestamp",
              field: "timestamp",
              headerStyle: {
                backgroundColor: "#cc4422"
              }
            },
            {
              title: "Status",
              field: "status",
              headerStyle: {
                backgroundColor: "#cc4422"
              }
            }

          ]}
          data = {editable}
          title="Network Data"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}
        />
      </div>

    )
}