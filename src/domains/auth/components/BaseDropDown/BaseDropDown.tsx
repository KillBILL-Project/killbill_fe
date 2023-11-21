import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { ItemType } from '../../../../types/common';
import dropDownIcon from '../../../../assets/icon/dropdown_icon.png';
import {
  Container,
  DropDownContainer,
  DropDownItem,
  DropDownItemText,
  DropDownList,
  DropDownTitle,
  DropDownTitleIcon,
  DropDownTitleText,
  InputTitle,
} from './BaseDropDown.style';

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
      <InputTitle>국가</InputTitle>
      <DropDownContainer onPress={onPressDropDownContainer} activeOpacity={1}>
        <DropDownTitle isDropDownActive={isOpen}>
          <DropDownTitleText isItemSelected={selectedItem !== undefined}>
            {dropDownTitleText}
          </DropDownTitleText>
          <DropDownTitleIcon isDropDownActive={isOpen} source={dropDownIcon} />
        </DropDownTitle>
      </DropDownContainer>
      {isOpen ? (
        <DropDownList>
          {itemList.map(item => (
            <DropDownItem key={item.value} onPress={() => onPressDropDownItem(item)}>
              <DropDownItemText>{item.label}</DropDownItemText>
            </DropDownItem>
          ))}
        </DropDownList>
      ) : null}
    </Container>
  );
};

export default DropDown;
