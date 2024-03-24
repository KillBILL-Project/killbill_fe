import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CountText, CountWrapper } from './Filter.style';

const TrashCount: React.FC<{ count?: number }> = ({ count }) => {
  const { top } = useSafeAreaInsets();

  return (
    <CountWrapper top={top}>
      <CountText>{count !== undefined ? `${count} 개` : ''}</CountText>
    </CountWrapper>
  );
};
export default TrashCount;
