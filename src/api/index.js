import axios from 'axios';

const getAccessToken = async () => {
  const storedToken = localStorage.getItem('accessToken');

  if (storedToken) return storedToken;
  else {
    try {
      const url = 'https://api-twitch.herokuapp.com/auth/token';
      const { data } = await axios.get(url);

      localStorage.setItem('accessToken', data.access_token);

      return data.access_token;
    } catch (err) {
      return console.log(err);
    }
  }
};

const requestToAPI = async ({ endpoint, queryParams = '' }) => {
  const apiBaseURL = 'https://api-twitch.herokuapp.com';
  const accessToken = await getAccessToken();

  try {
    const url = `${apiBaseURL}/${endpoint}/?access_token=${accessToken}${queryParams}`;
    const { data } = await axios.get(url);

    return data;
  } catch (err) {
    return console.log(err);
  }
};

const API = {
  getTopGames: async function () {
    const endpoint = 'top-games';
    const data = await requestToAPI({ endpoint });

    return data;
  },
  getGameById: async function (gameId) {
    const endpoint = `games/${gameId}`;
    const data = await requestToAPI({ endpoint });

    return data;
  },
  getTopStreams: async function (maxObjects) {
    const endpoint = 'top-streams';
    const queryParams = `&first=${maxObjects}`;
    const data = await requestToAPI({ endpoint, queryParams });

    return data;
  },
  getStreamsByParam: async function (
    paramName,
    // ? paramName: 'game_id' || language || 'user_id' || user_login
    paramValue,
    first,
    additionalQuery = ''
  ) {
    const endpoint = `streams/${paramName}/${paramValue}`;
    const queryParams = `&first=${first}${additionalQuery}`;
    const data = await requestToAPI({ endpoint, queryParams });

    return data;
  },
  getMultipleUsersById: async function (usersIds) {
    const endpoint = `users/${usersIds}`;
    const data = await requestToAPI({ endpoint });

    return data;
  },
  getUserById: async function (userId) {
    if (!userId) return;

    const endpoint = `users/${userId}`;
    const data = await requestToAPI({ endpoint });

    return data;
  },
  getUserFollowersCount: async function (userId) {
    const endpoint = `users/follows/${userId}`;
    const data = await requestToAPI({ endpoint });

    return { data: data.total };
  },
  getVideosByParam: async function (paramName, paramValue, first) {
    // ? paramName: 'id' || 'user_id' || 'game_id'

    const endpoint = `videos/${paramName}/${paramValue}`;
    const queryParams = `&first=${first}`;
    const data = await requestToAPI({ endpoint, queryParams });

    return data;
  },
};

export default API;
