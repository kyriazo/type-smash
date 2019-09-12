import React from 'react';
import classes from './Word.module.css';

const word = (props) => {

    let word_class = '';
    let error = '';
    let typed = '';

    if (props.wordnr === props.currentIndex) {
        word_class = classes.current;
    }
    
    if (props.typed === 'hit') {
        typed = classes.hit;
    }else if (props.typed === 'miss') {
        typed = classes.miss;
    }

    // if(props.flag === true){
    //     error = classes.error;
    // }

    return (
        <span className={word_class +' '+ classes.word + ' ' + error + typed}>{props.word}</span>
    )
}

export default word;
