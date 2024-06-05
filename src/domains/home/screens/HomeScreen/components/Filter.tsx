import React from 'react';
import { View, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSetRecoilState } from 'recoil';
import indicatorBar from '../../../../../assets/image/home_indicator_bar.png';
import { Tooltip, TooltipContainer } from './Filter.style';
import { trashFilterState } from '../../../../../states';

const filterData: any = {
  0: {
    id: 'SMALL',
    title: '작은',
  },
  1: {
    id: 'MEDIUM',
    title: '중간',
  },
  2: {
    id: 'BIG',
    title: '큰',
  },
};

const Filter = () => {
  const setTrashFilter = useSetRecoilState(trashFilterState);

  const handleOnChange = (value: number) => {
    setTrashFilter(filterData[value].id);
  };

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
        value={1}
        onValueChange={value => handleOnChange(value)}
      />
      <TooltipContainer>
        {Object.values(filterData).map(value => (
          <Tooltip>{value.title}</Tooltip>
        ))}
      </TooltipContainer>
    </View>
  );
};

export default Filter;
