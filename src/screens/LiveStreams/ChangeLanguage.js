import React from 'react';
import styled from 'styled-components';

import { palette, usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  margin: 0 0 30px 20px;
  p {
    color: ${props => props.colors.StreamsBanner.title};
  }
`;

const Button = styled.button`
  padding: 8px 13px;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  color: ${palette.white.dark};
  background: ${({ colors, isActive }) =>
    isActive ? colors.NavBar.background : palette.grey.dark};
`;

// TODO add loading and show <Loader /> when language change
function ChangeLanguage({ currentLanguage, setCurrentLanguage }) {
  const filterByLanguage = async language => {
    if (currentLanguage === language) return;
    await setCurrentLanguage(language);
  };

  const languages = [
    {
      label: 'All',
      langKey: ''
    },
    {
      label: 'ENG',
      langKey: 'en'
    },
    {
      label: 'KOR',
      langKey: 'ko'
    },
    {
      label: 'FR',
      langKey: 'fr'
    },
    {
      label: 'ES',
      langKey: 'es'
    },
    {
      label: 'DE',
      langKey: 'de'
    },
    {
      label: 'IT',
      langKey: 'it'
    }
  ];

  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      <p>Filter by language</p>
      {languages.map(({ label, langKey }, id) => {
        const isActive = langKey === currentLanguage;
        return (
          <Button
            key={id}
            colors={colors}
            isActive={isActive}
            onClick={() => filterByLanguage(langKey)}
          >
            {label}
          </Button>
        );
      })}
    </Wrapper>
  );
}

export default ChangeLanguage;
