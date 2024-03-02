import React from 'react';
import { Bold16 } from '../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../constants/colors';
import { Category, Container } from './CategoryTab.style';

interface HeaderTabBarProps {
  selectList: CardType[];
  selectedKey: CardType;
  onPress: (cardType: CardType) => void;
}

export type CardCategoryType = 'WEEKLY' | 'INTEGRATE';

export interface CardType {
  category: CardCategoryType;
  name: string;
}

const CategoryTab = ({ selectList, selectedKey, onPress }: HeaderTabBarProps) => {
  return (
    <Container>
      {selectList.map(cardType => {
        const isSelected = selectedKey.category === cardType.category;
        return (
          <Category key={cardType.category} selected={isSelected} onPress={() => onPress(cardType)}>
            <Bold16 color={isSelected ? BLACK : GREY600}>{cardType.name}</Bold16>
          </Category>
        );
      })}
    </Container>
  );
};

export default CategoryTab;
