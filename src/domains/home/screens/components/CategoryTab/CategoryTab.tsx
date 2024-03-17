import React from 'react';
import { Bold16 } from '../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../constants/colors';
import { Category, Container } from './CategoryTab.style';

interface CategoryTabProps<T extends string> {
  selectList: CategoryType<T>[];
  selected: CategoryType<T>;
  onPress: (cardType: CategoryType<T>) => void;
}

export interface CategoryType<T extends string> {
  category: T;
  name: string;
}

const CategoryTab = <T extends string>({ selectList, selected, onPress }: CategoryTabProps<T>) => {
  return (
    <Container>
      {selectList.map(cardType => {
        const isSelected = selected.category === cardType.category;
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
