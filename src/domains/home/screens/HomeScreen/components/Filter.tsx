import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import indicatorBar from '../../../../../assets/image/home_indicator_bar.png';
import { Tooltip, TooltipContainer } from './Filter.style';

const Filter = () => {
  return (
    <View style={{ paddingTop: 28, paddingBottom: 22, position: 'relative' }}>
      <ImageBackground
        source={indicatorBar}
        style={{
          width: '100%',
          height: 16,
        }}
      />
      <Slider
        style={{ width: '100%', height: 40, position: 'absolute', top: 17 }}
        thumbTintColor="#000000"
        minimumTrackTintColor="#FFFFFF00"
        maximumTrackTintColor="#FFFFFF00"
        minimumValue={0}
        maximumValue={2}
        step={1}
        value={2}
      />
      <TooltipContainer>
        <Tooltip>작은</Tooltip>
        <Tooltip>중간</Tooltip>
        <Tooltip>큰</Tooltip>
      </TooltipContainer>
    </View>
  );
};

export default Filter;
