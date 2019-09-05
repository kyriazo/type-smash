import React from 'react';
import classes from './Words.module.css'

const words = (props) => {

    let coloring = classes.grey;

    if (props.hit === 'space') {
        coloring = classes.grey;
    }else if (props.hit) {
        coloring = classes.green;
    }else{
        coloring = classes.red;
    }

    return (
        <textarea className={coloring + ' ' + 'shownWords'} value={props.value} disabled={true} />
    )
}

export default words;
