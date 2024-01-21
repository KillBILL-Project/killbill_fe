import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Container, AuthDetailContainer, BaseButtonContainer } from './AuthDetailScreen.style';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import { AuthDetailType, ItemType, RegisterType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import Screen from '../../../../components/Screen/Screen';
import BaseButton from '../../components/BaseButton/BaseButton';
import { HomeStackParamList } from '../../../../types/navigation';
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
  const route = useRoute<RouteProp<HomeStackParamList, 'AuthDetail'>>();
  const { showToast, ToastComponent } = useToast();

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
    </>
  );
};

export default AuthDetailScreen;
