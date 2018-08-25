/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 25.08.2018
 * Time: 22:56
 */

// Core
import { combineForms } from 'react-redux-form';

export const formsReducer = combineForms(
    {
        user: {
            profile: {
                firstName: '',
                lastName:  '',
                avarar:    [],
            },
        },
    },
    'forms'
);
