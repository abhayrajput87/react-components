import React from 'react'
import Table from '../Components/Table'
import SortableTable from '../Components/SortableTable'
function TablePage() {

  const fruits=[
    {name:'Apple',color:'bg-red-500',score:3},
    {name:'Orange',color:'bg-orange-500',score:3},
    {name:'Banana',color:'bg-yellow-500',score:3},
    {name:'Lime',color:'bg-green-500',score:3}

  ]

  const config=[
    {label:'fruits', render:(fruit)=>fruit.name, sortValue:(fruit)=>fruit.name },
    {label:'color', render:(fruit)=> <div className={`p-3 m-3 ${fruit.color}`} ></div> },
    {label:'score', render:(fruit)=>fruit.score, sortValue:(fruit)=>fruit.score }
  ]
  
  const keyFn=(fruit)=>{
    return fruit.name;
  }

  return (
    <div>
    <Table data={fruits} config={config} keyFn={keyFn} >Hello</Table>
    <SortableTable data={fruits} config={config} keyFn={keyFn} >Hello</SortableTable>
    </div>
  )
}

export default TablePage;