import React, {Component} from 'react';
import "./Gallery.scss"
import $ from 'jquery';

const flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?key=28bbce664357dee4740dd333091240a8&tags=marilynmonroe&format=json&jsoncallback=?";
const mPhotos = [];
const lPhotos = [];

class Gallery extends Component {
    state = {
        miniPhotos: "",
        linkPhotos: ""
    };

    componentDidMount() {

        $.getJSON(flickerAPI, {
            format: "json"
        }).done((result, status, xhr) => {
            $.each(result.items, (i, item) => {
                if (mPhotos.length < 9 && lPhotos.length < 9) {
                    mPhotos.push(item.media.m);
                    lPhotos.push(item.link);
                    this.setState({miniPhotos: mPhotos, linkPhotos: lPhotos})
                }
                if (i === 8) {
                    return false;
                }
            });
        }).fail((xhr, status, error) => {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        });

    }

    render() {

        const miniature = mPhotos.map((el, index) => <img key={index} alt={"Marilyn Monroe Photos"} src={el}></img>);
        const miniatureLink = lPhotos.map((el, index) => (
            <div key={index} className={"gallery__box__singleElement"}><a key={index} href={el}
                                                                          target={"_blank"}>{miniature[index]}</a>
            </div>));

        return (
            <>
                <section className={"gallery__box"}>

                    <div className={"gallery__box__content"}>
                        {miniatureLink}

                    </div>
                </section>
            </>
        )
    }
}

export default Gallery