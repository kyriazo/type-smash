import React from 'react';
import classes from './Header.module.css'

const header = () => {

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Type-Smash.com</h1>
            <h2 className={classes.heading}>Test your typing skills!</h2>
            <nav><ul>
                <li>Homepage</li>
                <li>Stats</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul></nav>
        </header>
    );
}

export default header;
