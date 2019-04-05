import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ channel }) => (
  <iframe
    allowFullScreen
    frameBorder={0}
    scrolling='no'
    src={`https://player.twitch.tv/?channel=${channel.login}`}
    title={`${channel.login} live stream video`}
  />
);

Video.propTypes = {
  channel: PropTypes.object
};

export default Video;
