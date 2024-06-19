import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { EXCLUDED_NUMERIC_PATTERN } from '@constants/constants';
import { BLACK, GREY600, WHITE } from '@constants/colors';
import { Gender, ItemType } from '@type/common';
import { Medium14, Semibold18 } from '@components/Typography';
import { AuthDetailType } from '@type/auth';
import BaseInput from '@components/BaseInput';
import BaseDropDown from '@components/BaseDropDown';
import { Container, GenderButton, GenderSelectContainer, InputTitle } from './styles';

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

const AuthDetailInput = ({
  age,
  gender,
  isOpen,
  setIsOpen,
  selectedItem,
  itemList,
  setAuthDetail,
  setSelectedItem,
}: AuthDetailProps) => {
  const { t } = useTranslation();
  const setGender = (selectedGender: Gender) => {
    setAuthDetail((prevState: any) => ({ ...prevState, gender: selectedGender }));
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
      <BaseInput
        title={t('auth_detail.input.age.title')}
        placeholder={t('auth_detail.input.age.placeholder')}
        onChangeText={onChangeAge}
        value={age}
        keyboardType="numeric"
      />
      <Container>
        <InputTitle>
          <Medium14 color={BLACK}>{t('auth_detail.input.gender.title')}</Medium14>
        </InputTitle>
        <GenderSelectContainer>
          <GenderButton onPress={onPressManButton} isSelected={isSelectedMan}>
            <Semibold18 color={isSelectedMan ? WHITE : GREY600}>
              {t('auth_detail.input.gender.button.man')}
            </Semibold18>
          </GenderButton>
          <GenderButton onPress={onPressWomanButton} isSelected={isSelectedWoman}>
            <Semibold18 color={isSelectedWoman ? WHITE : GREY600}>
              {t('auth_detail.input.gender.button.woman')}
            </Semibold18>
          </GenderButton>
        </GenderSelectContainer>
      </Container>
      <BaseDropDown
        title={t('auth_detail.input.country.title')}
        placeholder={t('auth_detail.input.country.placeholder')}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
        setSelectedItem={setCountry}
        itemList={itemList}
      />
    </>
  );
};

export default AuthDetailInput;
