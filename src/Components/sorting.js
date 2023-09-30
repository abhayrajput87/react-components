const data=[
    {name:'Apple',color:'bg-red-500',score:3},
    {name:'Orange',color:'bg-orange-500',score:3},
    {name:'Banana',color:'bg-yellow-500',score:3},
    {name:'Lime',color:'bg-green-500',score:3}

  ]

  function getSortVAlue(obj){

    return obj.score;

  }


const sortOrder='asc';

data.sort((a,b)=>{
  const valueA=getSortVAlue(a);
  const valueB=getSortVAlue(b);
  const order= sortOrder==='asc'?1:-1;
  
  if(typeof(valueA)==='number'){
    return (valueA-valueB)*(-order);
  }
  else
  {return valueA.localeCompare(valueB)*(-order); }
})