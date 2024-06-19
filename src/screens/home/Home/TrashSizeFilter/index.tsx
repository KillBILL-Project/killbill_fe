import React, { Dispatch, SetStateAction } from 'react';
import { ImageBackground, View } from 'react-native';
import Slider from '@react-native-community/slider';
import indicatorBar from '@assets/image/home_indicator_bar.png';
import { scale } from '@utils/platform';
import { Tooltip, TooltipContainer } from './styles';

interface TrashSizeFilterProps {
  trashSize: number;
  setTrashSize: Dispatch<SetStateAction<number>>;
}

export interface TrashSizeType {
  id: string;
  title: string;
  size: number;
}

export const trashSizeMeta: TrashSizeType[] = [
  {
    id: 'SMALL',
    title: '작은',
    size: scale(30),
  },
  {
    id: 'MEDIUM',
    title: '중간',
    size: scale(40),
  },
  {
    id: 'BIG',
    title: '큰',
    size: scale(50),
  },
];

const TrashSizeFilter = ({ trashSize, setTrashSize }: TrashSizeFilterProps) => {
  return (
    <View style={{ paddingTop: 34, paddingBottom: 13, position: 'relative' }}>
      <ImageBackground
        source={indicatorBar}
        style={{
          width: '100%',
          height: 16,
        }}
      />
      <Slider
        style={{ width: '100%', height: 40, position: 'absolute', top: 23 }}
        thumbTintColor="#000000"
        minimumTrackTintColor="#FFFFFF00"
        maximumTrackTintColor="#FFFFFF00"
        minimumValue={0}
        maximumValue={2}
        step={1}
        value={trashSize}
        onValueChange={value => setTrashSize(value)}
      />
      <TooltipContainer>
        {trashSizeMeta.map(value => (
          <Tooltip key={value.id}>{value.title}</Tooltip>
        ))}
      </TooltipContainer>
    </View>
  );
};

export default TrashSizeFilter;
