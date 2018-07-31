/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 31.07.2018
 * Time: 16:32
 */

// Types
import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO, SHOW_PREVIOUS_PHOTO } from './type';

export const showNextPhoto = () => {
    return {
        type: SHOW_NEXT_PHOTO,
    };
};

export const showPreviousPhoto = () => {
    return {
        type: SHOW_PREVIOUS_PHOTO,
    };
};

export const showSelectedPhoto = (photoIndex) => {
    return {
        type:    SHOW_SELECTED_PHOTO,
        payload: photoIndex,
    };
};
