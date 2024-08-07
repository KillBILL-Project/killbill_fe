import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '@constants/constants';
import { ItemType } from '@type/common';
import { AuthStackParamList } from '@type/navigation';
import { requestRegister } from '@services/api/authService';
import { AuthDetailType, RegisterRequest } from '@type/auth';
import { checkNotification, getFcmToken } from '@utils/push-notification';
import useToast from '@hooks/useToast';
import useAuth from '@hooks/useAuth';
import AuthDetailInput from '@components/AuthDetailInput';
import Screen from '@components/Screen';
import BaseButton from '@components/BaseButton';
import {
  AuthDetailContainer,
  BaseButtonContainer,
  Container,
  SkipButton,
  SkipButtonText,
} from './styles';

const initialAuthDetail = {
  age: '',
  gender: undefined,
  country: '',
};

const AuthDetailScreen = () => {
  const [authDetail, setAuthDetail] = useState<AuthDetailType>(initialAuthDetail);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ItemType | undefined>(undefined);
  const route = useRoute<RouteProp<AuthStackParamList, 'AuthDetail'>>();
  const { setTokens } = useAuth();
  const { showToast } = useToast();

  const { t } = useTranslation();

  const validationList = useMemo(
    () => [
      {
        validation: authDetail.age !== '' && !Number.isNaN(Number(authDetail.age)),
        message: t('auth_detail.validation.invalid_age'),
      },
      {
        validation: authDetail.gender !== undefined,
        message: t('auth_detail.validation.invalid_gender'),
      },
      {
        validation: authDetail.country !== '',
        message: t('auth_detail.validation.invalid_country'),
      },
    ],
    [authDetail.age, authDetail.country, authDetail.gender, t],
  );

  const isValidForm = useCallback(
    (isSkipping?: boolean) => {
      if (!isSkipping) {
        for (const element of validationList) {
          if (!element.validation) {
            showToast({ message: element.message, isFailed: true });
            return false;
          }
        }
      }
      return true;
    },
    [showToast, validationList],
  );

  const onPressButton = async ({ isSkipping }: { isSkipping?: boolean }) => {
    if (!isValidForm(isSkipping)) return;
    const fcmToken = await getFcmToken();
    const pushConsent = await checkNotification();

    const params: RegisterRequest = {
      email: route.params.email,
      password: route.params.password,
      loginType: route.params.loginType,
      socialToken: route.params.authCode,
      fcmToken,
      pushConsent,
      ...authDetail,
    };
    const response = await requestRegister(params);
    await setTokens({ ...response?.data.data });
  };

  useEffect(() => {
    if (selectedCountry)
      setAuthDetail(prevState => ({ ...prevState, country: selectedCountry.value }));
  }, [selectedCountry]);

  return (
    <Screen title={t('auth_detail.title')} isBackButtonShown={false}>
      <Container>
        <AuthDetailContainer>
          <AuthDetailInput
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
          <BaseButton
            marginBottom={0}
            text={t('auth_detail.button.submit')}
            onPress={() => onPressButton({})}
          />
        </BaseButtonContainer>
        <SkipButton onPress={() => onPressButton({ isSkipping: true })}>
          <SkipButtonText>건너뛰기</SkipButtonText>
        </SkipButton>
      </Container>
    </Screen>
  );
};

export default AuthDetailScreen;
