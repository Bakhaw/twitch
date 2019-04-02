import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

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
    color: ${({ colors, isActive }) =>
      isActive ? colors.NavBar.NavLink.active : colors.NavBar.NavLink.default};
    :hover {
      color: ${props => props.colors.NavBar.NavLink.active};
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
  const colors = usePalette();
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
      {items.map(({ id, label, to }) => (
        <NavLink key={id} colors={colors} isActive={location.pathname === to}>
          <Link to={to}>{label}</Link>
        </NavLink>
      ))}
    </NavLinks>
  );
}

export default withRouter(Links);
