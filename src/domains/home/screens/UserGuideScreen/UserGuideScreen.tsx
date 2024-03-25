import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Container } from './UserGuideScreen.style';
import UserGuideCategory from './UserGuideCategory';
import { UserGuideList, userGuideCategoryArray } from '../../../../constants/userGuide';
import Screen from '../../../../components/Screen';
import Separator from '../../../../components/Separator';
import { GREY100 } from '../../../../constants/colors';
import { MenuParamList } from '../../../../types/navigation';

const UserGuideScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MenuParamList>>();

  const onPressCategory = (category: UserGuideList) => {
    navigate('UserGuideDetail', { category });
  };

  return (
    <Screen title="이용가이드">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Container>
          {userGuideCategoryArray.map((category, index) => (
            <>
              <UserGuideCategory
                key={`userGuide${index.toString()}`}
                category={category}
                onPress={() => onPressCategory(category)}
              />
              <Separator horizontal length="100%" color={GREY100} margin={16} />
            </>
          ))}
        </Container>
      </ScrollView>
    </Screen>
  );
};

export default UserGuideScreen;
