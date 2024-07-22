import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UserGuideList, userGuideCategoryArray } from '@constants/userGuide';
import { GREY100 } from '@constants/colors';
import { UserGuideParamList } from '@type/navigation';
import Screen from '@components/Screen';
import Separator from '@components/Separator';
import { Container } from './styles';
import UserGuideCategory from './UserGuideCategory';

const UserGuideScreen = () => {
  const { navigate } = useNavigation<NavigationProp<UserGuideParamList>>();

  const onPressCategory = (category: UserGuideList) => {
    navigate('UserGuideDetail', { category });
  };

  return (
    <Screen title="이용가이드">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Container>
          {userGuideCategoryArray.map(category => (
            <React.Fragment key={category}>
              <UserGuideCategory category={category} onPress={() => onPressCategory(category)} />
              <Separator horizontal length="100%" color={GREY100} margin={16} />
            </React.Fragment>
          ))}
        </Container>
      </ScrollView>
    </Screen>
  );
};

export default UserGuideScreen;
