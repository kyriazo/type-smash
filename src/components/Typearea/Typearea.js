import React from 'react';

const typearea = (props)=> {
    return (
        <input id='typearea' onChange={props.clicked} className='typedWords' type='text'  value={props.value} />
    )
}

export default typearea;
