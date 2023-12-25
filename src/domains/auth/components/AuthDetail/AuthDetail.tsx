import React, { Dispatch, SetStateAction, useMemo } from 'react';
import BaseInput from '../BaseInput/BaseInput';
import { Container, GenderButton, GenderSelectContainer, InputTitle } from './AuthDetail.style';
import BaseDropDown from '../BaseDropDown/BaseDropDown';
import { AuthDetailType, Gender, ItemType } from '../../../../types/common';
import { EXCLUDED_NUMERIC_PATTERN } from '../../../../constants/constants';
import { Semibold18 } from '../../../../components/Typography/Typography';
import { GREY600, WHITE } from '../../../../constants/colors';

export interface DropDownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: ItemType | undefined;
  itemList: ItemType[];
}

interface AuthDetailProps extends DropDownProps {
  age: string;
  gender: Gender;
  setAuthDetail: Dispatch<SetStateAction<AuthDetailType>>;
  setSelectedItem: Dispatch<SetStateAction<ItemType | undefined>>;
}

const AuthDetail = ({
  age,
  gender,
  isOpen,
  setIsOpen,
  selectedItem,
  itemList,
  setAuthDetail,
  setSelectedItem,
}: AuthDetailProps) => {
  const setGender = (selectedGender: Gender) => {
    setAuthDetail(prevState => ({ ...prevState, gender: selectedGender }));
  };
  const onChangeAge = (enteredAge: string) => {
    setAuthDetail(prevState => {
      const numericText = enteredAge.replace(EXCLUDED_NUMERIC_PATTERN, '');
      const filteredAge = numericText.length > 3 ? prevState.age : numericText;
      return { ...prevState, age: filteredAge };
    });
  };
  const setCountry = (selectedCountry: ItemType) => {
    setSelectedItem(selectedCountry);
  };

  const onPressManButton = () => setGender('M');
  const onPressWomanButton = () => setGender('F');
  const isSelectedMan = useMemo(() => gender === 'M', [gender]);
  const isSelectedWoman = useMemo(() => gender === 'F', [gender]);

  return (
    <>
      <BaseInput title="나이" placeholder="나이 입력" onChangeText={onChangeAge} value={age} />
      <Container>
        <InputTitle>성별</InputTitle>
        <GenderSelectContainer>
          <GenderButton onPress={onPressManButton} isSelected={isSelectedMan}>
            <Semibold18 color={isSelectedMan ? WHITE : GREY600}>남자</Semibold18>
          </GenderButton>
          <GenderButton onPress={onPressWomanButton} isSelected={isSelectedWoman}>
            <Semibold18 color={isSelectedWoman ? WHITE : GREY600}>여자</Semibold18>
          </GenderButton>
        </GenderSelectContainer>
      </Container>
      <BaseDropDown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
        setSelectedItem={setCountry}
        itemList={itemList}
      />
    </>
  );
};

export default AuthDetail;
