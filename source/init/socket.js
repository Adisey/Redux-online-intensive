/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 18.08.2018
 * Time: 18:43
 */

// Core
import io from 'socket.io-client';

// Config
import { ROOT_URL, groupId } from '../REST';

export const socket = io(ROOT_URL, {
    path: '/rdux/ws',
});

export const joinSocketChannel = () => {
    const token = localStorage.getItem('token');

    socket.emit('join', {groupId, token});
};