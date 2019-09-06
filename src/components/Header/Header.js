import React from 'react';
import classes from './Header.module.css'

const header = () => {

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Type-Smash.com</h1>
            <h2 className={classes.heading}>Test your typing skills!</h2>
            <nav><ul>
                <li><a href='/'>Homepage</a></li>
                <li><a>Stats</a></li>
                <li><a>About</a></li>
                <li><a>FAQ</a></li>
                <li><a>Contact</a></li>
            </ul></nav>
        </header>
    );
}

export default header;
