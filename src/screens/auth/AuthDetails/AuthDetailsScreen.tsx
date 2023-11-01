import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AuthInput, AuthInputText } from '../../../components/AuthInput';
import { EXCLUDED_NUMERIC_PATTERN } from '../../../common/constant';
import useDropDownPicker from '../../../hooks/useDropDownPicker';
import AuthButton from '../../../components/AuthButton';

import {
  Container,
  InputContainer,
  GenderSelectContainer,
  GenderButton,
  AuthButtonContainer,
  GenderButtonText,
} from './AuthDetails.style';
import Screen from '../../../components/Screen';

export type DropDownProps = {
  label: string;
  value: string;
};

const AuthDetailScreen = () => {
  const [enteredAge, setEnteredAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [region, setRegion] = useState<DropDownProps[] | undefined>([]);

  const countries = useRef<DropDownProps[]>([
    { label: 'Korea', value: 'korea' },
    { label: 'Japan', value: 'japan' },
    { label: 'China', value: 'china' },
  ]);

  const regions = useRef<Record<string, DropDownProps[]>>({
    korea: [
      { label: 'Korea', value: 'korea' },
      { label: 'Japan', value: 'japan' },
      { label: 'China', value: 'china' },
    ],
    japan: [
      { label: 'Japan', value: 'japan' },
      { label: 'China', value: 'china' },
      { label: 'Korea', value: 'korea' },
    ],
    china: [
      { label: 'China', value: 'china' },
      { label: 'Korea', value: 'korea' },
      { label: 'Japan', value: 'japan' },
    ],
  });

  const onChangeAge = (age: string) => {
    setEnteredAge(prevState => {
      const numericText = age.replace(EXCLUDED_NUMERIC_PATTERN, '');
      return numericText.length > 3 ? prevState : numericText;
    });
  };

  const onChangeCountryValue = (country: string | null) => {
    const regionsInCountry = country != null ? regions.current[country] : undefined;
    setRegion(regionsInCountry);
  };

  const onCountryOpen = useCallback(() => {
    setIsRegionOpen(false);
  }, [setIsRegionOpen]);

  const onRegionOpen = useCallback(() => {
    setIsCountryOpen(false);
  }, [setIsCountryOpen]);

  const [CountryDropDownPicker, selectedCountry] = useDropDownPicker({
    items: countries.current,
    placeholder: '국가 선택',
    open: isCountryOpen,
    setOpen: setIsCountryOpen,
    onChangeValue: onChangeCountryValue,
    onOpen: onCountryOpen,
  });

  const [RegionDropDownPicker, selectedRegion] = useDropDownPicker({
    items: region,
    placeholder: '지역 선택',
    open: isRegionOpen,
    setOpen: setIsRegionOpen,
    onOpen: onRegionOpen,
  });

  // input 을 다루면 onPress 도 호출이 되는가?
  const onPressManButton = () => setSelectedGender('남자');
  const onPressWomanButton = () => setSelectedGender('여자');
  const isSelectedMan = useMemo(() => () => selectedGender === '남자', [selectedGender]);
  const isSelectedWoman = useMemo(() => () => selectedGender === '여자', [selectedGender]);

  return (
    <Screen title="추가정보 입력">
      <Container>
        <InputContainer>
          <AuthInput title="나이">
            <AuthInputText placeholder="나이 입력" onChangeText={onChangeAge} value={enteredAge} />
          </AuthInput>
          <AuthInput title="성별">
            <GenderSelectContainer>
              <GenderButton onPress={onPressManButton} isSelected={isSelectedMan()}>
                <GenderButtonText isSelected={isSelectedMan()}>남자</GenderButtonText>
              </GenderButton>
              <GenderButton onPress={onPressWomanButton} isSelected={isSelectedWoman()}>
                <GenderButtonText isSelected={isSelectedWoman()}>여자</GenderButtonText>
              </GenderButton>
            </GenderSelectContainer>
          </AuthInput>
          <AuthInput title="국가" zIndex={1}>
            {CountryDropDownPicker}
          </AuthInput>
          <AuthInput title="지역">{RegionDropDownPicker}</AuthInput>
        </InputContainer>
        <AuthButtonContainer>
          <AuthButton text="입력 완료" onPress={() => {}} backgroundColor="orange" color="white" />
        </AuthButtonContainer>
      </Container>
    </Screen>
  );
};

export default AuthDetailScreen;
