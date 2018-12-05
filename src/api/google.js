import { Google, Constants } from 'expo';

// const scopes = ['profile', 'email'];

// const loginAsync = async () => {
//   try {
//     const result = await Google.logInAsync({
//       androidClientId: '891645207122-0bb4n8r99hc5unpbm10lq000hgmekuvh.apps.googleusercontent.com',
//       iosClientId: '891645207122-5emhsbcrgov3gg8cm9sdppvbs0s399e1.apps.googleusercontent.com'
//     });

//     if (result.type === 'success') {
//       return Promise.resolve(result.accessToken);
//     }

//     return Promise.reject('No Success');
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

const loginAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: '891645207122-75se6gfsep4n3udvqpohqn4m8t3s7iu0.apps.googleusercontent.com',
      iosClientId: '891645207122-5emhsbcrgov3gg8cm9sdppvbs0s399e1.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    });

    if (result.type == 'success') {
      return Promise.resolve(result.accessToken);
    } else {
      return Promise.reject('Filed');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GoogleApi = {
  loginAsync: loginAsync
};
