import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';
import { StateContext } from '../../Context';

const Wrapper = styled.div`
  padding: 40px 20px;
  width: ${layout.Chat.width}px;
  iframe,
  object,
  embed {
    box-shadow: ${props => props.colors.LiveStream.boxShadow};
    border: 5px solid rgba(255, 255, 255, 0);
    -webkit-border-radius: 6px !important;
    -ms-border-radius: 6px !important;
    -o-border-radius: 6px !important;
    border-radius: 6px !important;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Chat = ({ channel }) => {
  const colors = usePalette();
  const { currentTheme } = useContext(StateContext);
  return (
    <Wrapper colors={colors}>
      <iframe
        allowFullScreen
        frameBorder={0}
        id={channel.login}
        src={`https://www.twitch.tv/embed/${
          channel.login
        }/chat/${currentTheme === 'Dark' && '?darkpopout'}&wmode=transparent`}
        title={`${channel.login} live stream video`}
      />
    </Wrapper>
  );
};

Chat.propTypes = {
  channel: PropTypes.object
};

export default Chat;
