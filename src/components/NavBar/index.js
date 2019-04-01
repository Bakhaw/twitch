import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ToggleThemeButton from './ToggleThemeButton';
import { layout, usePalette } from '../../stylesheets';

const Links = [
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

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  position: fixed;
  left: 0;
  right: 0;
  height: ${layout.NavBar.height};
  background: ${props => props.colors.NavBar.background};
`;

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

function NavBar({ location }) {
  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      <NavLinks>
        {Links.map(({ id, label, to }) => (
          <NavLink key={id} colors={colors} isActive={location.pathname === to}>
            <Link to={to}>{label}</Link>
          </NavLink>
        ))}
      </NavLinks>
      <ToggleThemeButton />
    </Wrapper>
  );
}

export default withRouter(NavBar);
