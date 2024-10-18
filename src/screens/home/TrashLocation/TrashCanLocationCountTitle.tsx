import React from 'react';
import { Title, TitleText } from './TrashLocation.style';

const TrashCanLocationCountTitle = ({ count = 0 }: { count?: number }) => {
  return (
    <Title>
      <TitleText>{`내 근처 분리수거 ${count}곳`}</TitleText>
    </Title>
  );
};

export default TrashCanLocationCountTitle;
