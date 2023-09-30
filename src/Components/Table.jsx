import React, { Fragment } from 'react'

function Table({data,config,keyFn}) {
  if (!Array.isArray(data)) {
    return <div>
      Data is not type of array
      </div>;
  }

  const renderedColumn=config.map((column)=>
  {
     if(column.header)
     {
      console.log(config)
       return <Fragment key={column.label} >{column.header()}</Fragment>;
    }
    else{
      console.log(config)

    }
    return(
      
      <th key={column.label} >{column.label}</th>)
  })

  const renderedData=data.map((rowData)=>{
    const renderedCells=config.map((cell)=>{
        return <td className='p-3' key={cell.label}  >{cell.render(rowData)}</td>
    })
    
    return(
      <tr className='border-b' key={keyFn(rowData)} >
        {renderedCells}
      </tr>
    );
  }) ;
  
  
  return (
    <div>
      <table   className='border-b border-spacing-2' >
        <thead className='' >
          <tr>
          {renderedColumn}
          </tr>
        </thead>
        <tbody>
          {renderedData}
        </tbody>
      </table>
    </div>
  )
}

export default Table;