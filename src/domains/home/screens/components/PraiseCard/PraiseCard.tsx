import { Image } from 'react-native';
import React from 'react';
import NewBadge from '../../PraiseCardScreen/components/NewBadge';
import { Bold18 } from '../../../../../components/Typography';
import { PRIMARY } from '../../../../../constants/colors';
import { ComplimentCardType } from '../../../../../services/api/complimentService';
import { Container, PraiseCardName } from './PraiseCard.style';

interface PraiseCardProps {
  item: ComplimentCardType;
  index: number;
  size?: 'large' | 'small';
  onPressCard: (cardInfo: ComplimentCardType) => void;
}

const PraiseCard = ({ item, index, size, onPressCard }: PraiseCardProps) => {
  return (
    <Container
      key={`a${index.toString()}`}
      size={size ?? 'large'}
      onPress={() => onPressCard(item)}
    >
      <NewBadge />
      <Image
        source={{ uri: item.cardImage }}
        resizeMode="contain"
        style={{ width: '100%', height: '100%' }}
      />
      <PraiseCardName>
        <Bold18 color={PRIMARY}>{item.title}</Bold18>
      </PraiseCardName>
    </Container>
  );
};

export default PraiseCard;
