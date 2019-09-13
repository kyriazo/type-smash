import React from 'react';
import classes from './Word.module.css';

const word = (props) => {

    let word_class = '';
    let typed = '';

    if (props.wordnr === props.currentIndex) {
        word_class = classes.current;
    }
    
    if (props.typed === 'hit') {
        typed = classes.hit;
    }else if (props.typed === 'miss') {
        typed = classes.miss;
    }

    return (
        <span className={word_class +' '+ classes.word + ' ' + typed}>{props.word}</span>
    )
}

export default word;
