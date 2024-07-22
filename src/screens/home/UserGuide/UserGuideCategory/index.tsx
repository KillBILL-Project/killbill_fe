import React from 'react';
import { Image } from 'react-native';
import arrow from '@assets/icon/arrow-right-black.png';
import { BLACK } from '@constants/colors';
import { userGuideCategory, UserGuideList } from '@constants/userGuide';
import { Regular16 } from '@components/Typography';
import { scale } from '@utils/platform';
import { ButtonContainer, Container, InnerContainer, TitleContainer } from './styles';

interface UserGuideCategoryProps {
  category: UserGuideList;
  onPress: () => void;
}

const UserGuideCategory = ({ category, onPress }: UserGuideCategoryProps) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Image
          source={userGuideCategory[category].icon}
          resizeMode="cover"
          style={{ width: scale(62), height: scale(62), borderRadius: scale(10) }}
        />
        <InnerContainer>
          <TitleContainer>
            <Regular16 color={BLACK}>{userGuideCategory[category].title}</Regular16>
          </TitleContainer>
          <Image source={arrow} style={{ width: scale(20), height: scale(20) }} />
        </InnerContainer>
      </ButtonContainer>
    </Container>
  );
};

export default UserGuideCategory;
