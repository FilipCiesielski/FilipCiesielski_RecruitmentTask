import React, {Component} from 'react';
import "./NavBar.scss"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faImage} from '@fortawesome/fontawesome-free-solid';

class NavBar extends Component {
    render() {
        const activeBorder = {
            border: "0.1rem solid white",
            borderRadius: "50%"
        };
        return (
            <nav className={"nav__box"}>
                <div className={"nav__box__photo"}></div>
                <div className={"nav__box__icons"}>
                    <NavLink activeStyle={activeBorder} exact to={"/"}>
                        <div><FontAwesomeIcon className={"font-awesome"} icon={faUser}/></div>
                    </NavLink>
                    <NavLink activeStyle={activeBorder} to={"/gallery"}>
                        <div><FontAwesomeIcon className={"font-awesome"} icon={faImage}/></div>
                    </NavLink>
                </div>
            </nav>

        )
    }
}

export default NavBar