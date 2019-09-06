import React from 'react';
import classes from './Header.module.css'

const header = () => {

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Type-Smash.com</h1>
            <h2 className={classes.heading}>Test your typing skills!</h2>
            <nav><ul>
                <li><a href='http://gkyriazo.com'>About</a></li>
                <li><a href='https://github.com/kyriazo'>Github</a></li>
                <li><a href='https://github.com/kyriazo/type-smash'>Source Code</a></li>                
            </ul></nav>
        </header>
    );
}

export default header;
