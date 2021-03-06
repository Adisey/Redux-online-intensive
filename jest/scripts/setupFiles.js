// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const newAvatarUrl = 'NEW_AVATAR_URL';

const users = [
    {
        avatar:    'USER1_AVATAR',
        firstName: 'USER1_firstName',
        id:        'USER1_ID',
        lastName:  'USER1_lastName',
    },
    {
        avatar:    'USER2_AVATAR',
        firstName: 'USER2_firstName',
        id:        'USER2_ID',
        lastName:  'USER2_lastName',
    }
];

const responseDataSuccessUsers = {
    data:    users,
    message: successMesasge,
};

const fetchResponseSuccessUsers = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccessUsers)),
};



const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const newName = {
    firstName: 'Walter',
    lastName:  'White',
};

const newAvatar = ['avatar'];

const newPassword = {
    oldPassword: '12345',
    newPassword: '123456',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

global.__ = {
    newAvatarUrl,
    newAvatar,
    newName,
    newPassword,
    users,
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataSuccessUsers,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseSuccess204,
    fetchResponseFail401,
    fetchResponseFail400,
    fetchResponseSuccessUsers,
    credentials,
    url,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
