import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { ItemType } from '../../../../types/common';
import dropDownIcon from '../../../../assets/icon/dropdown_icon.png';
import {
  Container,
  DropDownContainer,
  DropDownItem,
  DropDownList,
  DropDownTitle,
  DropDownTitleIcon,
  InputTitle,
} from './BaseDropDown.style';
import { Medium14, Regular16 } from '../../../../components/Typography/Typography';
import { BLACK, GREY500, GREY900 } from '../../../../constants/colors';

type SetSelectedItemType = (item: ItemType) => void;

export interface DropDownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: ItemType | undefined;
  setSelectedItem: Dispatch<SetStateAction<ItemType | undefined>> | SetSelectedItemType;
  itemList: ItemType[];
}

const DropDown = ({
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
  itemList,
}: DropDownProps) => {
  const onPressDropDownContainer = () => {
    setIsOpen(prevState => !prevState);
  };

  const onPressDropDownItem = (item: ItemType) => {
    setIsOpen(false);
    setSelectedItem(item);
  };

  const dropDownTitleText = useMemo(() => {
    return selectedItem === undefined ? '국가 선택' : selectedItem.label;
  }, [selectedItem]);

  return (
    <Container>
      <InputTitle>
        <Medium14 color={GREY900}>국가</Medium14>
      </InputTitle>
      <DropDownContainer onPress={onPressDropDownContainer} activeOpacity={1}>
        <DropDownTitle isDropDownActive={isOpen}>
          <Regular16 color={selectedItem ? BLACK : GREY500}>{dropDownTitleText}</Regular16>
          <DropDownTitleIcon isDropDownActive={isOpen} source={dropDownIcon} />
        </DropDownTitle>
      </DropDownContainer>
      {isOpen ? (
        <DropDownList>
          {itemList.map(item => (
            <DropDownItem key={item.value} onPress={() => onPressDropDownItem(item)}>
              <Regular16 color={BLACK}>{item.label}</Regular16>
            </DropDownItem>
          ))}
        </DropDownList>
      ) : null}
    </Container>
  );
};

export default DropDown;
