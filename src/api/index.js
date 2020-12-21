import axios from 'axios';

export const getAccessToken = async () => {
  try {
    const url = 'https://api-twitch.herokuapp.com/auth/token';
    const { data } = await axios.get(url);

    localStorage.setItem('accessToken', data.access_token);

    return data.access_token;
  } catch (err) {
    return console.log(err);
  }
};

const storedToken = localStorage.getItem('accessToken') || getAccessToken();

const API = {
  baseUrl: 'https://api-twitch.herokuapp.com',
  getTopGames: async function () {
    try {
      const url = `${this.baseUrl}/top-games/?access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getGameById: async function (gameId) {
    try {
      const url = `${this.baseUrl}/games/${gameId}/?access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getTopStreams: async function (maxObjects) {
    try {
      const url = `${this.baseUrl}/top-streams/?first=${maxObjects}&access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getStreamsByParam: async function (
    paramName,
    paramValue,
    first,
    additionalQuery = ''
  ) {
    // ? paramName: 'game_id' || language || 'user_id' || user_login
    try {
      const url = `${this.baseUrl}/streams/${paramName}/${paramValue}/?first=${first}${additionalQuery}&access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getMultipleUsersById: async function (usersIds) {
    try {
      const url = `${this.baseUrl}/users/${usersIds}/?access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getUserById: async function (userId) {
    if (!userId) return;

    try {
      const url = `${this.baseUrl}/users/${userId}/?access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getUserFollowersCount: async function (userId) {
    try {
      const url = `${this.baseUrl}/users/follows/${userId}/?access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return { data: data.total };
    } catch (err) {
      return console.log(err);
    }
  },
  getVideosByParam: async function (paramName, paramValue, maxObjects) {
    // ? paramName: 'id' || 'user_id' || 'game_id'
    try {
      const url = `${this.baseUrl}/videos/${paramName}/${paramValue}/?first=${maxObjects}&access_token=${storedToken}`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      return console.log(err);
    }
  },
};

export default API;
