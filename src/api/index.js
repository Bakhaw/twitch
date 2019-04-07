import axios from 'axios';
import config from './config';

const API = {
  baseUrl: 'https://api.twitch.tv/helix',
  getTopGames: async function() {
    const url = `${this.baseUrl}/games/top/?first=100`;
    const { data } = await axios.get(url, config);
    return data;
  },
  getGameById: async function(gameId) {
    try {
      const url = `${this.baseUrl}/games/?id=${gameId}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getStreams: async function() {
    try {
      const url = `${this.baseUrl}/streams`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getStreamsByParam: async function(paramName, paramValue, maxObjects) {
    // ? paramName: 'game_id' || 'user_id' || user_login
    try {
      const url = `${
        this.baseUrl
      }/streams/?${paramName}=${paramValue}&first=${maxObjects}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getMultipleUsersById: async function(usersIds) {
    try {
      const url = `${this.baseUrl}/users/?id=${usersIds}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getUserById: async function(userId) {
    try {
      const url = `${this.baseUrl}/users/?id=${userId}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getVideosByParam: async function(paramName, paramValue, maxObjects) {
    // ? paramName: 'id' || 'user_id' || 'game_id'
    try {
      const url = `${
        this.baseUrl
      }/videos/?${paramName}=${paramValue}&first=${maxObjects}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  }
};

export default API;
