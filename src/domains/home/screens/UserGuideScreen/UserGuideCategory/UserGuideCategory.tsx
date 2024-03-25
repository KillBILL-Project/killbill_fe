import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import {
  ButtonContainer,
  Container,
  InnerContainer,
  TitleContainer,
} from './UserGuideCategory.style';
import { Regular16 } from '../../../../../components/Typography';
import { BLACK } from '../../../../../constants/colors';
import { userGuideCategory, UserGuideList } from '../../../../../constants/userGuide';
import arrow from '../../../../../assets/icon/arrow-right-black.png';
import { ratio } from '../../../../../utils/platform';

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
          style={{ width: ratio * 62, height: ratio * 62, borderRadius: ratio * 10 }}
        />
        <InnerContainer>
          <TitleContainer>
            <Regular16 color={BLACK}>{userGuideCategory[category].title}</Regular16>
          </TitleContainer>
          <Image source={arrow} style={{ width: ratio * 20, height: ratio * 20 }} />
        </InnerContainer>
      </ButtonContainer>
    </Container>
  );
};

export default UserGuideCategory;
