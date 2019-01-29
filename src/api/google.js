import { Google, Constants } from 'expo';

const scopes = ['profile', 'email'];

const loginAsync = async () => {
    try {
        const result = await Google.logInAsync({
            androidClientId: '891645207122-0bb4n8r99hc5unpbm10lq000hgmekuvh.apps.googleusercontent.com',
            iosClientId: '891645207122-5emhsbcrgov3gg8cm9sdppvbs0s399e1.apps.googleusercontent.com',
            scopes,
            behavior: 'web',
        });

        if (result.type === 'success') {
            return Promise.resolve(result.accessToken);
        }

        return Promise.reject('No Success');
    } catch (error) {
        return Promise.reject(error);
    }
};

export const GoogleApi = {
    loginAsync: loginAsync
};
