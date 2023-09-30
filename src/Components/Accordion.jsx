import React, { useState } from 'react'
import  {GoChevronDown,GoChevronUp}   from 'react-icons/go'
function Accordion({items}) {
    const[expandedIndex,setIndex]=useState(-1);

    const renderedItems=items.map((item,index)=>{

        const renderedIndex= expandedIndex===index;


        const renderedContent=renderedIndex && <div>{item.content}</div>;
        
        const icon =(
            <span className='text-2xl' > {renderedIndex?<GoChevronUp/>:<GoChevronDown/>} </span>
        )
        const handleClick=()=>{
            if(expandedIndex===index)
            {
                setIndex(-1);
            }
            else{
                setIndex(index);
            }
        }
        
        return(
            <div key={item.id}>
                <div className='flex p-2 items-center bg-gray-100 border-1 justify-between '  onClick={handleClick} >{item.label} 
                {icon}
                </div>
                <div>{renderedContent}</div>
            </div>
        )
    })
  return (
    <div>
        {renderedItems}
    </div>
  )
}

export default Accordion;