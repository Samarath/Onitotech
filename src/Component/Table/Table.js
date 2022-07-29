import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

 

 function Table(props) {
    const mainData = props.data.map((item) => {
        return {
            col1: item[0],
            col2: item[1],
            col3: item[2],
            col4: item[3],
        }
    })    
    // console.log(mainData)
    const data = React.useMemo(
        () => 
        //     [
        //   {
        //     col1: 'Minsk',
        //     col2: '27',
        //     col3: 'rain',
        //   },
        //   {
        //     col1: 'Vilnius',
        //     col2: '30',
        //     col3: 'rain',
        //   },
        //   {
        //     col1: 'London',
        //     col2: '23',
        //     col3: 'rain',
        //   },
        // ],
        mainData,
        [mainData]
    )
    const columns = React.useMemo(
        () => [
          {
            Header: 'Date',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Amount',
            accessor: 'col2',
          },
          {
            Header: 'Payment Method',
            accessor: 'col3', // accessor is the "key" in the data
          },
          {
            Header: 'Remark',
            accessor: 'col4', // accessor is the "key" in the data
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
   
          {// Loop over the header rows
   
          headerGroups.map(headerGroup => (
   
            // Apply the header row props
   
            <tr {...headerGroup.getHeaderGroupProps()}>
   
              {// Loop over the headers in each row
   
              headerGroup.headers.map(column => (
   
                // Apply the header cell props
   
                <th {...column.getHeaderProps()}>
   
                  {// Render the header
   
                  column.render('Header')}
   
                </th>
   
              ))}
   
            </tr>
   
          ))}
   
        </thead>
   
        {/* Apply the table body props */}
   
        <tbody {...getTableBodyProps()}>
   
          {// Loop over the table rows
   
          rows.map(row => {
   
            // Prepare the row for display
   
            prepareRow(row)
   
            return (
   
              // Apply the row props
   
              <tr {...row.getRowProps()}>
   
                {// Loop over the rows cells
   
                row.cells.map(cell => {
   
                  // Apply the cell props
   
                  return (
   
                    <td {...cell.getCellProps()}>
   
                      {// Render the cell contents
   
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