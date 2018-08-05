/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 04.08.2018
 * Time: 0:47
 */

export function customThunk(store) {
    return function (next) {
        return function (action) {
            if (typeof action === "function"){
                return action(store.dispatch, store.getState);
            }
            return next(action);
        };
    };
    
}
