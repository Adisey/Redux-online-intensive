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
    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile))
            .toEqual({
                type:    type.FILL_PROFILE,
                payload: __.userProfile,
            });
    });

    test('updateAvatar', () => {
        expect(profileActions.updateAvatar(__.newAvatarUrl))
            .toEqual({
                type:    type.UPDATE_AVATAR,
                payload: __.newAvatarUrl,
            });
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

    test('updateAvatarAsync', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatarUrl))
            .toEqual({
                type:    type.UPDATE_AVATAR_ASYNC,
                payload: __.newAvatarUrl,
            });
    });

    test('updatePasswordAsync', () => {
        expect(profileActions.updatePasswordAsync(__.userProfile.firstName))
            .toEqual({
                type:    type.UPDATE_PASSWORD_ASYNC,
                payload: __.userProfile.firstName,
            });
    });

});
