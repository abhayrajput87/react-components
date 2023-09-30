import React from 'react'
import Link from './Link'
function Sidebar() {
const links=[{
    label:'dropdown',path:'/'
},
{
    label:'accordion',path:'/accordion'
},
{
    label:'button',path:'/button'
},
{
    label:'modal',path:'/modal'
},
{
    label:'table',path:'/table'
}
]

const renderedLinks= links.map((link)=>{
    return <Link key={link.label} className="mb-3" to={link.path} activeClassName="font-bold border-l-4 border-blue-500 pl-2" >{link.label}</Link>
});


    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col' >{renderedLinks}</div>
        
    
  )
}

export default Sidebar