import React from 'react';
import { useTable } from 'react-table';
import './Table.css';
 

 function Table(props) {
    const mainData = props.data.map((item) => {
        return {
            col1: item[0],
            col2: item[1],
            col3: item[2],
            col4: item[3],
        }
    })    
    const data = React.useMemo(
        () => mainData,
        [mainData]
    )
    const columns = React.useMemo(
        () => [
          {
            Header: 'Date',
            accessor: 'col1', 
          },
          {
            Header: 'Amount',
            accessor: 'col2',
          },
          {
            Header: 'Payment Method',
            accessor: 'col3', 
           },
          {
            Header: 'Remark',
            accessor: 'col4', 
          }
        ],
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

    return(
        <table {...getTableProps()}>

        <thead>
   
          {
   
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>   
                  {
                  column.render('Header')}
                </th>
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
   
                {
                row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {
                      cell.render('Cell')}
                    </td>
                  )
   
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )

 }

export default Table;