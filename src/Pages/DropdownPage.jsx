import { useState } from 'react';
import Dropdown from '../Components/Dropdown'

function DropdownPage() {
    const[selected,setSelected]=useState(null);
    const onClickMenu=(option)=>{
      setSelected(option.label);
    }
    const options =[
      {
        label:'Red',
        value: 'red'
  
  
      },
      {
        label:'Blue',
        value: 'Blue'
  
      },
      {
        label:'Green',
        value: 'Green'
  
      }
    ]
  
  
    return (
      <div>
         <Dropdown options={options} selected={selected} handleSelected={onClickMenu}  /> 
        
      </div>
     
    );
}

export default DropdownPage;