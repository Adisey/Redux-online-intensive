// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';


// Instruments
import Styles from './styles.m.css';

//Store
import { store } from '../../init/store';

// Actions
import { showNextPhoto } from '../../bus/gallery/actions';

@hot(module)
export default class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto);
        this.forceUpdate();
    };

    render () {
        const { gallery } = store.getState();

        const photo = gallery.photos.find((_, index) => index === gallery.selectedPhotoIndex);

        return (
            <section className = { Styles.gallery }>
                <img src = { photo.url } />
                <div>
                    <button>←</button>
                    <button className = { Styles.buttonActive } value = '0'>
                        1
                    </button>
                    <button value = '1'>2</button>
                    <button value = '2'>3</button>
                    <button value = '3'>4</button>
                    <button onClick = {this._showNextPhoto}>→</button>
                </div>
            </section>
        );
    }
}
