import React from 'react';
import { Bold16 } from '../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../constants/colors';
import { Select, SelectBox } from './HeaderTabBar.style';

interface HeaderTabBarProps {
  selectList: SelectType[];
  selectedKey: string | null;
  onPress: (key: string) => void;
}

export interface SelectType {
  key: string;
  name: string;
}

const HeaderTabBar = ({ selectList, selectedKey, onPress }: HeaderTabBarProps) => {
  return (
    <SelectBox>
      {selectList.map(({ key, name }) => {
        const selected = selectedKey ? selectedKey === key : selectList[0].key === key;
        return (
          <Select key={key} selected={selected} onPress={() => onPress(key)}>
            <Bold16 color={selected ? BLACK : GREY600}>{name}</Bold16>
          </Select>
        );
      })}
    </SelectBox>
  );
};

export default HeaderTabBar;
