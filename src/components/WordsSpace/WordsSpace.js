import React from 'react';
import classes from './WordsSpace.module.css'
import Word from '../Word/Word'
const wordsspace = (props) => {

    let coloring = classes.grey;

    if (props.hit === 'space') {
        coloring = classes.grey;
    }else if (props.hit) {
        coloring = classes.green;
    }else{
        coloring = classes.red;
    }

    return (
        <div className={classes.shownWords}>
            <div className={coloring +' '+ classes.wordContainer} >{props.children}</div>
        </div>
    )
}

export default wordsspace;
