import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Container, AuthDetailContainer, BaseButtonContainer } from './AuthDetailScreen.style';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import { AuthDetailType, ItemType, RegisterType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import Screen from '../../../../components/Screen/Screen';
import BaseButton from '../../components/BaseButton/BaseButton';
import { RootStackParamList } from '../../../../types/navigation';
import useAuth from '../../../../hooks/useAuth';
import useToast from '../../../../hooks/useToast';

const initialAuthDetail = {
  age: '',
  gender: undefined,
  country: '',
};

const AuthDetailScreen = () => {
  const [authDetail, setAuthDetail] = useState<AuthDetailType>(initialAuthDetail);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ItemType | undefined>(undefined);
  const { register } = useAuth();
  const route = useRoute<RouteProp<RootStackParamList, 'AuthDetail'>>();
  const { showToast, ToastComponent } = useToast();

  const validationList = useMemo(
    () => [
      {
        validation: authDetail.age !== '' && !Number.isNaN(Number(authDetail.age)),
        message: '나이를 입력해주세요.',
      },
      {
        validation: authDetail.gender !== undefined,
        message: '성별을 선택해주세요.',
      },
      {
        validation: authDetail.country !== '',
        message: '국가를 선택해주세요.',
      },
    ],
    [authDetail.age, authDetail.country, authDetail.gender],
  );

  const isValidForm = useCallback(() => {
    for (const element of validationList) {
      if (!element.validation) {
        showToast({ message: element.message, isFailed: true });
        return false;
      }
    }
    return true;
  }, [showToast, validationList]);

  const onPressButton = async () => {
    if (!isValidForm()) return;

    const params: RegisterType = { ...route.params, ...authDetail };
    await register(params);
  };

  useEffect(() => {
    if (selectedCountry)
      setAuthDetail(prevState => ({ ...prevState, country: selectedCountry.value }));
  }, [selectedCountry]);

  return (
    <>
      {ToastComponent}
      <Screen title="추가정보 입력" isBackButtonShown={false}>
        <Container>
          <AuthDetailContainer>
            <AuthDetail
              age={authDetail.age}
              gender={authDetail.gender}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedItem={selectedCountry}
              setSelectedItem={setSelectedCountry}
              itemList={COUNTRIES}
              setAuthDetail={setAuthDetail}
            />
          </AuthDetailContainer>
          <BaseButtonContainer>
            <BaseButton text="입력 완료" onPress={onPressButton} />
          </BaseButtonContainer>
        </Container>
      </Screen>
    </>
  );
};

export default AuthDetailScreen;
