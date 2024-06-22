import React from 'react';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MyPageParamList } from '@type/navigation';

const WebViewScreen = () => {
  const { params } = useRoute<RouteProp<MyPageParamList, 'WebView'>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: params.url }} startInLoadingState style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
