import React, { useEffect } from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from 'react-redux'
import { fetchThings } from './thingSlice'

export const ThingView = () => {

    const dispatch = useDispatch()
    const data2 = useSelector((state) => state.thing.things);
    const editable = data2.map(o => ({ ...o }));

    useEffect(() => {
      dispatch(fetchThings())
    }, [])
  
    return(
        <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <MaterialTable
          columns={[
            {
              title: "ID",
              field: "id",
              headerStyle: {
                backgroundColor: "#2244cc"
              }
            },
            {
              title: "Operation",
              field: "operation",
              headerStyle: {
                backgroundColor: "#2244cc"
              }
            },
            {
              title: "Scope",
              field: "scope",
              headerStyle: {
                backgroundColor: "#2244cc"
              }
            },
            {
              title: "Timestamp",
              field: "timestamp",
              headerStyle: {
                backgroundColor: "#2244cc"
              }
            },
            {
              title: "Status",
              field: "status",
              headerStyle: {
                backgroundColor: "#2244cc"
              }
            }

          ]}
          data = {editable}
          title="Big Data Table"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}
          // actions={[
          //   {
          //     icon: () => <SaveIcon />,
          //     tooltip: "Save User",
          //     onClick: (event, rowData) => alert("You saved " + rowData.name)
          //   }
          // ]}
          // components={{
          //   Action: (props) => (
          //     <Button
          //       onClick={(event) => props.action.onClick(event, props.data)}
          //       color="primary"
          //       variant="text"
          //       style={{ textTransform: "none" }}
          //       size="small"
          //     >
          //       Save
          //     </Button>
          //   )
          // }}
          // options={{
          //   headerStyle: {
          //     backgroundColor: "#01579b",
          //     color: "#FFF"
          //   }
          // }}
        />
      </div>

    )
}