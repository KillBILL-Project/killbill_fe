import React from 'react';
import {
  Container,
  Content,
  LeftIcon,
  RightIcon,
  RightIconImage,
} from '@screens/home/MyHistory/HistoryItem/styles';
import arrow from '@assets/icon/arrow-right-black.png';
import { scale } from '@utils/platform';

interface HistoryItemProps {
  cardComponent: React.ReactNode;
  children: React.ReactNode;
  touchable?: boolean;
  onPress?: () => void;
}

const HistoryItem = ({ cardComponent, children, touchable = false, onPress }: HistoryItemProps) => {
  return (
    <Container disabled={!touchable} onPress={onPress}>
      <LeftIcon>{cardComponent}</LeftIcon>
      <Content>{children}</Content>
      {touchable && (
        <RightIcon>
          <RightIconImage source={arrow} style={{ width: scale(20), height: scale(20) }} />
        </RightIcon>
      )}
    </Container>
  );
};

export default HistoryItem;
