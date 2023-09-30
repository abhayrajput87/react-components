import React from 'react'
import classNames from 'classnames';

function Button(
    {   
        children,
        primary,
        secondary,   //We are taking the boolean values as props
        success,
        warning,
        rounded,
        ...rest
    }
) {
   let classes=classNames('px-4 py-2',{
    'bg-blue-500 hover:bg-blue-700 text-white':primary,
    'bg-gray-500 hover:bg-gray-700 text-white':secondary,
    'bg-green-500 hover:bg-green-700 text-white':success,
    'bg-red-500 hover:bg-red-700 text-white':warning,


   })

  return (
    <button {...rest} className={classes} >
        {children}
    </button>
  )
}

export default Button;