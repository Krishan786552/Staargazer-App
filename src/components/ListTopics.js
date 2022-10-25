import React, { useCallback, useRef } from 'react';
import { DivComponent } from '../styles/commonComponents';

export const Item = ({ item, setSearch }) => {
  const topicRef = useRef('');

  const handleClickDiv = useCallback(() => {
    setSearch(topicRef.current.innerHTML)
  }, [setSearch]);

  return (
    <DivComponent>
      <p ref={topicRef} onClick={handleClickDiv} >{item.name}</p>
      <span>{item.stargazerCount} {`⭐`}</span>
    </DivComponent>
  );
};