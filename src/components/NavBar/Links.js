import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { layout, palette } from '../../stylesheets';

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  height: ${layout.NavBar.height};
  width: 100%;
`;

const NavLink = styled.li`
  margin: 0 10px;
  position: relative;
  a {
    color: ${props => props.color};
    font-size: 16px;
    :hover {
      color: ${palette.white.default};
    }
  }
  ${({ isActive }) =>
    isActive &&
    `
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(30px);
    height: 5px;
    width: 100%;
    background: #fff;
  }
`}
`;

function Links({ location }) {
  const items = [
    {
      id: 0,
      label: 'Découvrir',
      to: '/'
    },
    {
      id: 1,
      label: 'Parcourir',
      to: '/directory'
    }
  ];
  return (
    <NavLinks>
      {items.map(({ id, label, to }) => {
        const isActive = location.pathname === to;
        return (
          <NavLink
            key={id}
            color={isActive ? palette.white.default : palette.grey.default}
            isActive={isActive}
          >
            <Link to={to}>{label}</Link>
          </NavLink>
        );
      })}
    </NavLinks>
  );
}

export default withRouter(Links);
