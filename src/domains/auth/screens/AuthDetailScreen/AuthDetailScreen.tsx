import React, { useState } from 'react';
import { Container } from './AuthDetailScreen.style';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import { AuthDetailType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';

export default () => {
  const [authDetail, setAuthDetail] = useState<AuthDetailType>({
    age: '',
    gender: undefined,
    country: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [inRegisterProgress, setInRegisterProgress] = useState(false);

  return (
    <Container>
      <AuthDetail
        age={authDetail.age}
        gender={authDetail.gender}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={authDetail.country}
        itemList={COUNTRIES}
        setAuthDetail={setAuthDetail}
      />
    </Container>
  );
};
