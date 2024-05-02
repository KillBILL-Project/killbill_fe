import React from 'react';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-native';

const WebViewScreen = ({
  route: {
    params: { url },
  },
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} startInLoadingState style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
