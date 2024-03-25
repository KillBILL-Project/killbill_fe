import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { AuthDetailContainer, BaseButtonContainer, Container } from './AuthDetailScreen.style';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import { ItemType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import Screen from '../../../../components/Screen/Screen';
import BaseButton from '../../components/BaseButton/BaseButton';
import { AuthStackParamList } from '../../../../types/navigation';
import useToast from '../../../../hooks/useToast';
import { requestRegister } from '../../../../services/api/authService';
import { AuthDetailType, LoginResponse, RegisterRequest } from '../../../../types/auth';
import useAuth from '../../../../hooks/useAuth';
import { getFcmToken, requestUserPermission } from '../../../../utils/push-notification';

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
    const fcmToken = await getFcmToken();
    const pushConsent = await requestUserPermission();
    console.log('pushConsent', pushConsent);

    const params: RegisterRequest = {
      email: route.params.email,
      loginType: route.params.loginType,
      socialToken: route.params.authCode,
      fcmToken,
      pushConsent,
      ...authDetail,
    };
    const response = await requestRegister<LoginResponse>(params);
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
          <BaseButton text={t('auth_detail.button.submit')} onPress={onPressButton} />
        </BaseButtonContainer>
      </Container>
    </Screen>
  );
};

export default AuthDetailScreen;
