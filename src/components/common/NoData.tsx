import React from 'react';
import { Text, View } from 'react-native';

const NoData = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>데이터가 없어요..</Text>
    </View>
  );
};

export default NoData;
