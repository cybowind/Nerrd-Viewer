import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOperations } from './operationTableSlice'
import { useTable } from 'react-table'
import { OPERATION_COLUMNS } from './operationColumns'
import './operationTable.css'

export const OperationTableView = () => {

//   const operationTable = useSelector(state => state.operationTable)
  const dispatch = useDispatch()
  const columns = useMemo(() => OPERATION_COLUMNS, [])
  const data = useSelector((state) => state.operationTable.operations); //TestSlice.allRequests);

  useEffect(() => {
    dispatch(fetchOperations())
  }, [])

//   const loading = useSelector((state) => state.operationTable.loading)
//   const operations = useSelector((state) => state.operationTable.operations)

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    rows,
    prepareRow,
  } = useTable ({
      columns,
      data
  })

  return (
    <table {...getTableProps()}>
    <thead>
        {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map( column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
        </tr>
        ))}
    </thead>



    <tbody {...getTableBodyProps()}>
        {
            rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })
        }
        <tr>
            <td></td>
        </tr>
    </tbody>
</table>
  )
}
