/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 04.08.2018
 * Time: 0:04
 */


// Instruments

import { MAIN_URL, groupId } from './config';

export const api = {
    posts: {
        fetch() {
            return fetch (`${MAIN_URL}/feed`, {
                method: 'GET',
                headers: {
                    'x-no-auth': groupId,
                }
            });
        },
    },
};