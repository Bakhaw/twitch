import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { layout } from '../../stylesheets';
import { StateContext } from '../../Context';

const Wrapper = styled.div`
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26), 0 5px 5px rgba(0, 0, 0, 0.26);
  width: ${layout.Chat.width}px;
`;

const Chat = ({ channel }) => {
  const { currentTheme } = useContext(StateContext);
  return (
    <Wrapper>
      <iframe
        allowFullScreen
        frameBorder={0}
        id={channel}
        src={`https://www.twitch.tv/embed/${
          channel.login
        }/chat/${currentTheme === 'Dark' && '?darkpopout'}`}
        title={`${channel.login} live stream video`}
      />
    </Wrapper>
  );
};

Chat.propTypes = {
  channel: PropTypes.object
};

export default Chat;
