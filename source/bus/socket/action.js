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

export const socketActions = {
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState());
        });
        socket.on('disconnect', () => {
            dispatch(uiActions.setOfflineState());
        });
    },
};
