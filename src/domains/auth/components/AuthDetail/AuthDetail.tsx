import React, { Dispatch, SetStateAction, useMemo } from 'react';
import BaseInput from '../BaseInput/BaseInput';
import {
  Container,
  GenderButton,
  GenderButtonText,
  GenderSelectContainer,
  InputTitle,
} from './AuthDetail.style';
import BaseDropDown from '../BaseDropDown/BaseDropDown';
import { AuthDetailType, Gender, ItemType } from '../../../../types/common';
import { EXCLUDED_NUMERIC_PATTERN } from '../../../../constants/constants';

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
}

const AuthDetail = ({
  age,
  gender,
  isOpen,
  setIsOpen,
  selectedItem,
  itemList,
  setAuthDetail,
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
    setAuthDetail(prevState => ({ ...prevState, country: selectedCountry }));
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
            <GenderButtonText isSelected={isSelectedMan}>남자</GenderButtonText>
          </GenderButton>
          <GenderButton onPress={onPressWomanButton} isSelected={isSelectedWoman}>
            <GenderButtonText isSelected={isSelectedWoman}>여자</GenderButtonText>
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
