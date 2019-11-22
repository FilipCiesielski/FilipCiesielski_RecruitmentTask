import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from '@fortawesome/fontawesome-free-solid';
import "./Profile.scss"

class Profile extends Component {
    render() {
        return (
            <section className={"profile__box"}>

                <h1>Marilyn Monroe</h1>
                <div className={"profile__box__location"}>
                    <FontAwesomeIcon className={"font-awesome"} icon={faMapMarkerAlt}/> Poznan, PL
                </div>
                <article>Lorem ipsum dolor sit amet dolor. Donec odio sagittis tortor. Nulla eleifend et, scelerisque
                    id, eleifend ut, faucibus orci ut orci fermentum neque tristique luctus nulla nisl neque lorem,
                    pretium.
                </article>
                <div className={"profile__box__quotation"}>
                    <em> When a naked man is chasing a woman through an alley <br/>with a butcher knife and a hard-on,
                        <br/>I figure he isn't out collecting for the Red Cross. </em>
                </div>
                <article>Lorem ipsum dolor sit amet dolor. Donec odio sagittis tortor. Nulla eleifend et, scelerisque
                    id, eleifend ut, faucibus orci ut orci fermentum neque tristique luctus nulla nisl neque lorem,
                    pretium.
                </article>
            </section>

        )
    }
}

export default Profile
