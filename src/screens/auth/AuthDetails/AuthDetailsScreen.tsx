import React, { useEffect, useState } from 'react';

import { AuthButtonContainer, Container, InputContainer } from './AuthDetails.style';
import Screen from '../../components/Screen';
import { ORANGE, WHITE } from '../../../common/colors';
import { AuthButton, AuthDetail, ItemType } from '../../components/Auth';
import { Gender } from '../../../common/types';

const countries = [
  { label: 'Korea', value: 'korea' },
  { label: 'Japan', value: 'japan' },
  { label: 'China', value: 'china' },
];

const AuthDetailScreen = () => {
  const [enteredAge, setEnteredAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender>(undefined);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ItemType | undefined>(undefined);
  const [countryList, setCountryList] = useState<ItemType[]>([]);

  useEffect(() => {
    setCountryList(countries);
  }, []);

  return (
    <Screen title="추가정보 입력">
      <Container>
        <InputContainer>
          <AuthDetail
            age={enteredAge}
            setAge={setEnteredAge}
            gender={selectedGender}
            setGender={setSelectedGender}
            isOpen={isDropDownOpen}
            setIsOpen={setIsDropDownOpen}
            selectedItem={selectedCountry}
            setSelectedItem={setSelectedCountry}
            itemList={countryList}
          />
        </InputContainer>
        <AuthButtonContainer>
          <AuthButton text="입력 완료" onPress={() => {}} backgroundColor={ORANGE} color={WHITE} />
        </AuthButtonContainer>
      </Container>
    </Screen>
  );
};

export default AuthDetailScreen;
