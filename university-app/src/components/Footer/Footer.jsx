import React from 'react';
import classes from "./Footer.module.css";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return <div className={classes.footer}>
        <div>All rights are okey</div>
        <div className={classes.item}>
            <NavLink to="/Dialogs"> Dialogs</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Content">Content</NavLink>
        </div>
    </div>
}

export default Footer;