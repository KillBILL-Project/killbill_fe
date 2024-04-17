import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import notification from '../../../../assets/icon/notification.png';
import { MyPageParamList } from '../../../../types/navigation';
import GoogleMap from './components/GoogleMap';
import TrashTypeList from './components/TrashTypeList';

const TrashLocationScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();

  const onPressNotification = () => {
    navigate('Notification');
  };

  const rightButtonProps = {
    icon: notification,
    padding: 24,
    size: 24,
    onPress: onPressNotification,
  };

  return (
    <Screen title="쓰레기 위치" isBackButtonShown={false} rightButtonProps={rightButtonProps}>
      <TrashTypeList />
      <GoogleMap />
    </Screen>
  );
};

export default TrashLocationScreen;
