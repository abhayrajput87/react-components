import React, { useEffect, useRef, useState } from 'react'

function Dropdown({ options, selected, handleSelected }) {
    const [show, setShow] = useState(false);


    const divEl = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) return;
            if (!(divEl.current.contains(event.target))) {
                setShow(false);
            }

        }
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);
    const handleClick = (option) => {
        setShow(false);
        handleSelected(option)
    }

    const renderedOptions = options.map((option) => {

        return (
            <div onClick={() => handleClick(option)} key={option.value} >{option.label}</div>
        )
    })

    let content = 'Select..';
    if (selected) {
        content = selected;
    }

    return (
        <div ref={divEl} onClick={() => { setShow(!show) }} >
            {content}
            {show && renderedOptions}
        </div>
    )
}

export default Dropdown;