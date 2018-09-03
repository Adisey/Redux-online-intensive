/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 28.08.2018
 * Time: 17:33
 */
// Actions
import { profileActions } from '../actions';
// Types
import { type } from '../types';

describe('Экшены Profile:', () => {
    test('fillProfile Snapshot', () => {
        expect(profileActions.fillProfile(__.userProfile))
            .toMatchSnapshot();
    });

    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile))
            .toEqual({
                type:    type.FILL_PROFILE,
                payload: __.userProfile,
            });
    });

    test('updateAvatar Snapshot 1 ', () => {
        expect(profileActions.updateAvatar(__.newAvatarUrl))
            .toMatchSnapshot();
    });

    test('updateAvatar Snapshot 2 ', () => {
        expect(profileActions.updateAvatar(__.url))
            .toMatchSnapshot();
    });

    test('updateAvatar', () => {
        expect(profileActions.updateAvatar(__.newAvatarUrl))
            .toEqual({
                type:    type.UPDATE_AVATAR,
                payload: __.newAvatarUrl,
            });
    });

    test('clearProfile Snapshot', () => {
        expect(profileActions.clearProfile())
            .toMatchSnapshot();
    });

    test('clearProfile', () => {
        expect(profileActions.clearProfile())
            .toEqual({
                type: type.CLEAR_PROFILE,
            });
    });

    test('updateNameAsync', () => {
        expect(profileActions.updateNameAsync(__.userProfile.firstName))
            .toEqual({
                type:    type.UPDATE_NAME_ASYNC,
                payload: __.userProfile.firstName,
            });
    });

    test('updateNameAsync Snapshot', () => {
        expect(profileActions.updateNameAsync(__.newName))
            .toMatchSnapshot();
    });

    test('updateAvatarAsync', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatarUrl))
            .toEqual({
                type:    type.UPDATE_AVATAR_ASYNC,
                payload: __.newAvatarUrl,
            });
    });

    test('updateAvatarAsync Snapshot', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatar))
            .toMatchSnapshot();
    });

    test('updatePasswordAsync', () => {
        expect(profileActions.updatePasswordAsync(__.userProfile.firstName))
            .toEqual({
                type:    type.UPDATE_PASSWORD_ASYNC,
                payload: __.userProfile.firstName,
            });
    });

    test('updatePasswordAsync Snapshot', () => {
        expect(profileActions.updatePasswordAsync(__.userProfile.firstName))
            .toMatchSnapshot();
    });

});
