import React from 'react';
import classes from './WordsSpace.module.css'

const wordsspace = (props) => {

    return (
        <div className={classes.shownWords}>
            <div className={classes.wordContainer} >{props.children}</div>
        </div>
    )
}

export default wordsspace;
