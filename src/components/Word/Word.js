import React from 'react';
import classes from './Word.module.css';

const word = (props) => {
    let word_class = classes.current;
    let error = '';

    if(props.flag === true){
        error = classes.error;
    }

    return (
        <span wordnr={props.word_number} className={word_class +' '+ classes.word + ' ' + error}>{props.word}</span>
    )
}

export default word;
