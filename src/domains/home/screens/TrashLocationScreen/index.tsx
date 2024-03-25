import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import notification from '../../../../assets/icon/notification.png';
import { MyPageParamList } from '../../../../types/navigation';
import GoogleMap from './components/GoogleMap';
import TrashList from './TrashList';

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
      <View style={{ flexDirection: 'row', gap: 8, paddingHorizontal: 24, paddingVertical: 12 }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            backgroundColor: '#AFFC41',
            borderWidth: 1,
            borderColor: '#AFFC41',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#241023', lineHeight: 21 }}>
            전체
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            종이
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            캔
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            유리
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            기타
          </Text>
        </TouchableOpacity>
      </View>
      <GoogleMap />
    </Screen>
  );
};

export default TrashLocationScreen;
