import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { palette, usePalette } from '../../stylesheets';
import { useFetch } from '../../api/hooks';

const Wrapper = styled.div`
  margin: 0 0 30px 20px;
`;

const Button = styled.button`
  padding: 8px 13px;
  margin: 0 10px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  color: ${palette.white.dark};
  background: ${({ colors, isActive }) =>
    isActive ? colors.NavBar.background : palette.grey.dark};
`;

function ChangeLanguage({ gameId, getData, maxObjects }) {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const { data: dataStreamsByLanguage } = useFetch('getStreamsByParam', [
    'language',
    currentLanguage,
    maxObjects,
    `&game_id=${gameId}`
  ]);

  const filterByLanguage = async language => {
    if (currentLanguage === language) return;
    await setCurrentLanguage(language);
  };

  const refreshData = async () => {
    await getData(dataStreamsByLanguage);
  };

  useEffect(() => {
    if (dataStreamsByLanguage.length > 0) {
      refreshData();
    }
  }, [dataStreamsByLanguage]);

  const languages = [
    {
      label: 'All',
      langKey: ''
    },
    {
      label: 'Français',
      langKey: 'fr'
    },
    {
      label: 'English',
      langKey: 'en'
    }
  ];

  const colors = usePalette();
  return (
    <Wrapper>
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
