import React, { useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Container, AuthDetailContainer, BaseButtonContainer } from './AuthDetailScreen.style';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import { AuthDetailType, ItemType, RegisterType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import Screen from '../../../../components/Screen/Screen';
import BaseButton from '../../components/BaseButton/BaseButton';
import { RootStackParamList } from '../../../../types/navigation';
import useAuth from '../../../../hooks/useAuth';
import { isCompletelyDifferent } from '../../../../utils/common';

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

  const isValidForm = useMemo(() => {
    return isCompletelyDifferent(authDetail, initialAuthDetail);
  }, [authDetail]);

  const onPressButton = async () => {
    if (!isValidForm) {
      Alert.alert('유효성 검사');
      return;
    }

    const params: RegisterType = { ...route.params, ...authDetail };
    await register(params);
  };

  useEffect(() => {
    if (selectedCountry)
      setAuthDetail(prevState => ({ ...prevState, country: selectedCountry.value }));
  }, [selectedCountry]);

  return (
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
  );
};

export default AuthDetailScreen;
