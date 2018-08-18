/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 18.08.2018
 * Time: 19:01
 */

// Actions
import { socket } from '../../init/socket';
import { uiActions } from '../ui/actions';
import { postsActions } from '../posts/actions';

export const socketActions = {
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState());
        });
        socket.on('disconnect', () => {
            dispatch(uiActions.setOfflineState());
        });
    },
    listenPosts: () => (dispatch) => {
        socket.on('create', (event) => {
            const { data: post }=JSON.parse(event);
            dispatch (postsActions.createPost(post));
        });
        socket.on('remove', (event) => {
            const { data: post }=JSON.parse(event);
            dispatch (postsActions.removePost(post));
        });
    },
};
