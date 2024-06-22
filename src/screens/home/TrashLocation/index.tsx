import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import notification from '@assets/icon/notification.png';
import { MyPageParamList } from '@type/navigation';
import Screen from '@components/Screen';
import GoogleMap from './GoogleMap';
import TrashTypeList from './TrashTypeList';

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
