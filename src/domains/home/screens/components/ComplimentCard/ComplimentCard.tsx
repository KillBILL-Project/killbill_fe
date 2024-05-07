import React from 'react';
import FastImage from 'react-native-fast-image';
import NewBadge from '../../ComplimentCardScreen/components/NewBadge';
import { Bold18 } from '../../../../../components/Typography';
import { PRIMARY } from '../../../../../constants/colors';
import { ComplimentCardType } from '../../../../../services/api/complimentService';
import { Container, ComplimentCardName } from './ComplimentCard.style';

interface ComplimentCardProps {
  item: ComplimentCardType;
  index: number;
  size?: 'large' | 'small';
  onPressCard: (cardInfo: ComplimentCardType) => void;
}

const ComplimentCard = ({ item, index, size, onPressCard }: ComplimentCardProps) => {
  return (
    <Container
      key={`a${index.toString()}`}
      size={size ?? 'large'}
      onPress={() => onPressCard(item)}
    >
      <NewBadge />
      <FastImage
        source={{ uri: item.cardImage }}
        resizeMode={FastImage.resizeMode.contain}
        style={{ width: '100%', height: '100%' }}
      />
      <ComplimentCardName>
        <Bold18 color={PRIMARY}>{item.title}</Bold18>
      </ComplimentCardName>
    </Container>
  );
};

export default ComplimentCard;
