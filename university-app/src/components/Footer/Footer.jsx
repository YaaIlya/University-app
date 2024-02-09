import React from 'react';
import classes from "./Footer.module.css";


const Footer = () => {
    return <div className={classes.footer}>
        <div>All rights are okey</div>
        <div className={classes.item}>
            <a href="/Dialogs"> Dialogs</a>
        </div>
        <div className={classes.item}><a href="/Content">Content</a></div>
    </div>
}

export default Footer;