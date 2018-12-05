import axios from 'axios';

const BASE_URL = `https://www.googleapis.com/userinfo/v2/me`;

export const authAsync = async token => {
  try {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }

    const res = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (res.status === 200) {
      console.log(res.status);
      return res.data;
    }
    throw new Error('Google request not successful');
  } catch (error) {
    throw error;
  }
};

export const Google = {
  authAsync
};
