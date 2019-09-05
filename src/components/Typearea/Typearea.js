import React from 'react';

const typearea = (props)=> {
    return (
        <input onChange={props.clicked} className='typedWords' type='text' placeholder='Start smashing your keyboard...' />
    )
}

export default typearea;