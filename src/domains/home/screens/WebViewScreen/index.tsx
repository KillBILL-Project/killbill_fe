import React from 'react';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-native';

const WebViewScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://wwooss.notion.site/FAQ-980b6ce2ce7047c2922902aba31a4a6e?pvs=74' }}
        startInLoadingState
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default WebViewScreen;
