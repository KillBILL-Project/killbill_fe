import React from 'react';
import WebView from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MyPageParamList } from '@type/navigation';
import Screen from '@components/Screen';
import { BLACK } from '@constants/colors';

const WebViewScreen = () => {
  const { params } = useRoute<RouteProp<MyPageParamList, 'WebView'>>();

  return (
    <Screen title={params.title} titleColor={BLACK}>
      <WebView source={{ uri: params.url }} startInLoadingState style={{ flex: 1 }} />
    </Screen>
  );
};

export default WebViewScreen;
